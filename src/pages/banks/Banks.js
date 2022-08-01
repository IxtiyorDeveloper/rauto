import {useLocation} from "react-router";
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Row} from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import Banks from "../../components/banks/banks";
import axios from "axios";
import {MainApi} from "../../api";
import {useEffect, useState} from "react";

function BanksAdmin() {
    const location = useLocation()
    const [banks, setBanks] = useState([])

    const getBanks = async () => {
        await axios
            .get(`${MainApi}/bank/all`)
            .then((res) => setBanks(res.data?.bank))
            .catch((err) => new Error(err));
    };

    useEffect(() => {
        getBanks();
    }, [])

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
                        <Banks dataSource={banks}/>
                    </div>

                </Row>
            </div>
        </div>
    )
}

export default BanksAdmin
