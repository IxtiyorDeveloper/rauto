import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminOrders() {
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios
            .get('http://185.196.214.145:5000/order/all')
            .then(res => {
                console.log(res)
                console.log('keldi')
                setOrders(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteOrder = id => {
        axios
            .delete(`http://185.196.214.145:5000/order/${id}`)
            .then(res => {
                getOrders()
            })
            .catch(err => {
                console.log(err)
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
                        <table className='table table-hover mt-5'>
                            <thead className='thead-dark'>
                                <tr className='textAlign'>
                                    <th scope='col'>Ism</th>
                                    <th scope='col'>Sana</th>
                                    <th scope='col'>Tel. Raqam</th>
                                    <th scope='col'>Link</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='thead-dark'>
                                {orders.length &&
                                    orders.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.ismiz}</td>
                                            <td>{item?.createdAt?.slice(0, 10)}</td>
                                            <td>{!!item.phone ? item.phone : 'No Phone'}</td>
                                            <td>
                                                {item.id && (
                                                    <Link to={`/more/${item.id}`}>To product</Link>
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => deleteOrder(item._id)}
                                                    style={{
                                                        border: '1px solid black',
                                                        padding: '5px 10px',
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders
