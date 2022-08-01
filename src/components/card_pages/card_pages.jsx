import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Cars from "../cars/cars";
import axios from "axios";
import {MainApi} from "../../api";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

function AdminCards() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [cars, setCars] = useState([])
    const [type, setType] = useState("")

    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
    }, [])

    const getCars = async () => {
        await axios
            .get(`${MainApi}/car/all`)
            .then((res) => setCars(res.data?.getAllmowin))
            .catch((err) => new Error(err));
    };

    const {isLoading} = useSelector((state) => state.car);

    const deleteCar = (id) => {
        Modal.confirm({
            centered: true,
            title: "Moshina o'chirish",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/car/${id}`)
                    .then((res) => {
                        dispatch(getCars());
                    })
                    .catch((err) => console.log(err));
            },
        })
    };

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <div className="row pt-5 page_list">
            <div className="col-xl-12">
                <div className="card-avto">
                    <div className="card-avto-body page_body_admin">
                        <div div className="box page_box content_wrapper">
                            <form name="search" className="search_form">
                                <input
                                    type="text"
                                    className="input"
                                    name="txt"
                                    onmouseout="document.search.txt.value = ''"
                                />
                                <span className="deff">Search</span>
                            </form>

                        </div>
                        <div
                            className="btn btn-danger btn-sm float-right"
                            onClick={() => logout()}
                        >
                            Chiqish
                        </div>
                        <Link
                            to="/admin/card/add"
                            className="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"
                        >
                            Avtomashina qo'shish
                        </Link>
                        <h4 className="mt-0 mb-4">Barcha Avtomashinalar ro'yhati</h4>
                        {
                            type === "user" ?
                                <Cars
                                    dataSource={cars?.filter(i => i?.userId?.toLowerCase()
                                        ===
                                        localStorage?.getItem("user_id").toLowerCase())}/>
                                :
                                <Cars
                                    dataSource={cars} deleteCar={deleteCar}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCards;
