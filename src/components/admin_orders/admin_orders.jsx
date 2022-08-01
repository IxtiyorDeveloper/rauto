import axios from 'axios'
import {useEffect, useState} from 'react'
import Orders from "../orders/orders";
import {MainApi} from "../../api";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

function AdminOrders() {
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios
            .get(`${MainApi}/order/all`)
            .then(res => {
                setOrders(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteOrder = id => {
        Modal.confirm({
            centered: true,
            title: "Order o'chirish",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/order/${id}`)
                    .then(res => {
                        getOrders()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className='ml-5 admin_news_section'>
            <div className='row pt-5'>
                <div className='col-12'>
                    <div className='box content_wrapper'>
                        <form name='search' className='search_form'>
                            <input
                                type='text'
                                className='input'
                                name='txt'
                                onmouseout="document.search.txt.value = ''"
                            />
                            <span className='deff'>Search</span>
                        </form>
                    </div>
                    <a href='/admin/orders' className='btn btn-danger btn-sm float-right'>
                        Asosiy sahifaga o'tish
                    </a>
                    <h4 className='mt-0 mb-4'>Buyurtma beruvchilar ro'yhati</h4>
                    <div className='table-responsive'>
                        <Orders dataSource={orders} deleteOrder={deleteOrder}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders
