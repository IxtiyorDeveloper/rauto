import { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Button, Col, Form, Input, Row } from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import Applications_page from '../../components/Applications_page/Applications_page'
import Application_page from '../../components/Applications_page/Application_page'

function CardsAdmin() {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!!!localStorage.getItem('token')) navigate('/login')
    }, [localStorage.getItem('token')])

    return (
        <div className='d-flex'>
            <AdminHeader />
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
                                <Input className='rounded' />
                            </Form.Item>
                            <Button className='rounded' type='primary'>
                                Search
                            </Button>
                        </form>
                        <Button className='rounded' type='primary' danger>
                            <Link to='/'>Asosiyga qaytish</Link>
                        </Button>
                    </Col>
                    {location.pathname === '/admin/applications' ? (
                        <Applications_page />
                    ) : (
                        <Application_page />
                    )}
                </Row>
            </div>
        </div>
    )
}

export default CardsAdmin
