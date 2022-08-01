import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getClients } from '../../store/client/client'
import Clients from "../clients/clients";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {MainApi} from "../../api";

function ClientsAdmin() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('a')

    const { clients, isLoading } = useSelector(state => state.client)

    const deleteClient = id => {
        Modal.confirm({
            centered: true,
            title: "Klient o'chirish",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/client/${id}`)
                    .then(res => {
                        dispatch(getClients())
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        dispatch(getClients())
    }, [])

    return (
        <div className='row pt-5 announcements_list'>
            <div className='col-xl-12'>
                <div className='box'>
                    <form name='search' className='search_form'>
                        <input
                            type='text'
                            className='input'
                            name='txt'
                            onmouseout="document.search.txt.value = ''"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <span className='deff'>Search</span>
                    </form>
                </div>
                <Link to='/admin/orders' className='btn btn-danger btn-sm float-right'>
                    Asosiyga qaytish
                </Link>
                <Link
                    to='/admin/clients/add'
                    className='btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right'
                >
                    Mijoz qo'shish
                </Link>

                <h4 className='mt-0 mb-4 pt-2'>Barcha mijozlar ro'yhati</h4>
                <Clients dataSource={clients} deleteClient={deleteClient}/>
            </div>
        </div>
    )
}

export default ClientsAdmin
