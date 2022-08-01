import {useLocation} from "react-router";
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Modal, Row} from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import Application_page from '../../components/Applications_page/Application_page'
import Banks from "../../components/banks/banks";
import axios from "axios";
import {MainApi} from "../../api";
import {useEffect, useMemo, useState} from "react";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {getClients} from "../../store/client/client";

function CardsAdmin() {
    const location = useLocation()
    const [banks, setBanks] = useState([])

    const getBanks = async () => {
        await axios
            .get(`${MainApi}/bank/all`)
            .then((res) => setBanks(res.data?.bank))
            .catch((err) => new Error(err));
    };

    const deleteApplication = id => {
        Modal.confirm({
            centered: true,
            title: "Klient o'chirish",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/bank/${id}`)
                    .then(res => {
                        getBanks();
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        getBanks();
    }, [])

    const data = useMemo(() => {
        return banks?.map(item => ({
            photo: item?.photo,
            pending: item?.pending,
            _id: item?._id,
            name: item?.name,
            surname: item?.surname,
            father_name: item?.father_name,
            phone: item?.phone,
            viloyat: item?.viloyat,
            tumani: item?.tumani,
            mahalla: item?.mahalla,
            maosh: item?.maosh,
            data: {_id: item?._id, pending: item?.pending}
        }))
    }, [banks])

    return (
        <div className='d-flex'>
            <AdminHeader/>
            <div className='page_list'>
                <Row>
                    <Col span={24} className='d-flex justify-content-between align-items-center py-3'>
                        <h3>
                            {location.pathname === '/admin/applications'
                                ? 'Tushgan arizalar'
                                : 'Tushgan arizalar batafsil'}
                        </h3>
                        <form className='d-flex my-auto'>
                            <Form.Item name='search' className='mb-0'>
                                <Input className='rounded'/>
                            </Form.Item>
                            <Button className='rounded' type='primary'>
                                Search
                            </Button>
                        </form>
                        <Button className='rounded' type='primary' danger>
                            <Link to='/'>Asosiyga qaytish</Link>
                        </Button>
                    </Col>
                    <div style={{width: "100%"}}>
                        {location.pathname === '/admin/applications' ? (
                            <Banks dataSource={data} getBanks={getBanks} deleteApplication={deleteApplication}/>
                        ) : (
                            <Application_page/>
                        )}
                    </div>

                </Row>
            </div>
        </div>
    )
}

export default CardsAdmin
