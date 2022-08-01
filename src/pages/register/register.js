import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";
import {message} from "antd";

// import {MainApi} from "../../config";

function Register() {
    const email = useRef()
    const password = useRef()
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    let navigate = useNavigate()

    let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.name !== "" || values?.email !== "" || values?.password !== "") {
            axios.post(`user/add`, values).then(e => {
                    localStorage.setItem("user_token", "KLJLJKKJLJKLKJLJKKHGIGHGHKJKJKJLKKLJKJLJLKJKLHJJKJK");
                    localStorage.removeItem("bank_token")
                    localStorage.removeItem("admin_token")
                    navigate("/admin/cards")
                }
            )
                .catch(err => console.error(err))
        } else {
            message.warn("Fill the form completely")
        }
    }

    useEffect(() => {
        if (!!token) navigate('/admin/cards')
    }, [token])

    return (
        <>
            <div className='accountbg'></div>
            <div className='home-btn d-none d-sm-block'>
                <a href='/' className='text-white'>
                    <i className='fa-solid fa-house'></i>
                </a>
            </div>
            <div className='wrapper-page'>
                <div className='card card-pages shadow-none'>
                    <div className='card-avto-body'>
                        <div className='text-center m-t-0 m-b-15'>
                            <a href='' className='logo logo-admin'>
                                <h1>RAUTO</h1>
                            </a>
                        </div>
                        <h5 className='font-18 text-center'></h5>
                        <form
                            className='form-horizontal m-t-30 el_form'
                            onSubmit={e => handleSubmit(e)}
                        >
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>Name</label>
                                    <input
                                        ref={email}
                                        className='form-control'
                                        type='text'
                                        required
                                        name='name'
                                        placeholder='Name'
                                        value={values?.name}
                                        onChange={event => setValues({...values, name: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>Email</label>
                                    <input
                                        ref={email}
                                        className='form-control email_input'
                                        type='email'
                                        required
                                        name='email'
                                        placeholder='Email'
                                        value={values?.email}
                                        onChange={event => setValues({...values, email: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>Password</label>
                                    <input
                                        ref={password}
                                        className='form-control password_input'
                                        type='password'
                                        required
                                        name='password'
                                        placeholder='Password'
                                        onChange={event => setValues({...values, password: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group text-center m-t-20'>
                                <div className='col-12'>
                                    <button
                                        className='btn btn-primary btn-block btn-lg waves-effect waves-light'
                                        type='submit'
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
