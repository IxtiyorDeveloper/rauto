import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getCars} from "../../store/car/car";
import {useNavigate} from "react-router";

function AdminCards() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {isLoading} = useSelector((state) => state.car);

    const deleteOrder = (id) => {
        // axios
        //     .delete(`http://185.196.214.145:5000/Car/${id}`)
        //     .then((res) => {
        //         dispatch(getCars());
        //     })
        //     .catch((err) => console.log(err));
    };

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        dispatch(getCars());
    }, []);

    const cars = []

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
                        <div className="table-responsive mt-5">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                <tr className="textAlign">
                                    <th scope="col">Rasm</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Marka</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Havola</th>
                                    <th scope="col">O'zgartirish</th>
                                    <th scope="col">O'chirish</th>
                                </tr>
                                </thead>
                                <tbody className="thead-dark">
                                {!isLoading && !!cars.length ? (
                                    cars?.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{width: "130px", height: "100px"}}>
                                                <img
                                                    src={item.photo[0]}
                                                    alt="photo"
                                                    style={{objectFit: "cover"}}
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </td>
                                            <td>{item._id}</td>
                                            <td>{item.marka}</td>
                                            <td>{item.madel}</td>
                                            <td>
                                                <Link
                                                    target="_blank"
                                                    style={{color: "blue"}}
                                                    to={`/more/${item._id}`}
                                                >
                                                    To product
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/admin/card/edit/${item._id}`}
                                                    style={{
                                                        border: "1px solid black",
                                                        padding: "5px 10px",
                                                        color: "blue",
                                                    }}
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => deleteOrder(item._id)}
                                                    style={{
                                                        border: "1px solid black",
                                                        padding: "5px 10px",
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <h1>Loading...</h1>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCards;
