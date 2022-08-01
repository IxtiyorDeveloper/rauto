import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Button, Card, Checkbox, Col, Form, Input, Row} from 'antd'
import {getCar} from '../../store/car/car'
import {Language} from '../../lang/Languages'
import {toast} from "react-toastify";
import axios from "axios";
import {MainApi} from "../../api";

const CreditAuto = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const [salaryd, setSalaryd] = useState(false)

    const {lang} = useSelector(state => state.lang)
    const {car} = useSelector(state => state.car)
    const [images, setImages] = useState([])
    const [image1, setImage1] = useState([])
    const [image2, setImage2] = useState([])
    const [image3, setImage3] = useState([])

    const {
        sername,
        req_surname,
        name,
        req_name,
        father_name,
        req_father_name,
        personal_num,
        req_personal_num,
        qarindosh_num,
        req_qarindosh_num,
        home_num,
        req_home_num,
        salary,
        comment_input,
        comment_num,
        how_much,
        passport,
        note,
        note_comment,
        yuborish,
        shartnoma,
        rasmyuklash,
        passportid1,
        passportid2,
        passportid3,
        passportimage,
        check,
        fill,
    } = Language

    useEffect(() => {
        dispatch(getCar(id))
    }, [])

    function createMarkup() {
        return {__html: shartnoma[lang]}
    }

    function createMarkup1() {
        return {__html: note_comment[lang]}
    }

    function createMarkup2() {
        return {__html: passportimage[lang]}
    }

    function createMarkup3() {
        return {__html: fill[lang]}
    }

    const onFinish = values => {
        const formData = new FormData()
        Object.entries(values).forEach(item => formData.append(item[0], item[1]))
        images.forEach(file => formData.append('photo', file))
        axios.post(`${MainApi}/bank/add`, formData).then(r => {
            toast.success("Muvafaqiyatli yuklandi!")
        }).catch(e =>
            toast.error("Xatolik yuz berdi!")
        )
    }

    const dummyRequest = ({file, onSuccess}) => {
        setTimeout(() => {
            onSuccess("ok")
        }, 0)
    }

    let a = []

    const handleChange = (info) => {
        if (info.target.files.length === 3) {
            for (let i = 0; i < 3; i++) {
                a = [...a, info.target.files[i]]
            }
            setImages(a)
        }
    }

    const onImageChange = (event, setImage) => {
        if (event) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result)
            };
            reader.readAsDataURL(event);
        }
    }

    useEffect(() => {
        if (images?.length === 3) {
            for (let i = 0; i < images?.length; i++) {
                if (i === 0) onImageChange(images[i], setImage1)
                if (i === 1) onImageChange(images[i], setImage2)
                if (i === 2) onImageChange(images[i], setImage3)
            }
        }
    }, [images])

    return (
        <div className='container'>
            {car && (
                <Card style={{width: '100%', borderColor: 'yellow'}}>
                    <Row className='align-items-center'>
                        <Col span={4}>
                            <img src={car?.photo[0]} alt='car_photo' className='border'/>
                        </Col>
                        <Col span={8}>
                            <h3>{car?.madel}</h3>
                            <h4>{car?.narxi} UZS</h4>
                        </Col>
                        <Col span={12}>
                            <p className='pb-0' dangerouslySetInnerHTML={createMarkup3()}/>
                        </Col>
                    </Row>
                </Card>
            )}
            <Form
                onFinish={onFinish}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                className='my-4'
            >
                <Row className='d-flex align-items-center' gutter={18}>
                    {/* surname, name, fathername */}
                    <Col span={8}>
                        {/* Surname */}
                        <Form.Item
                            label={sername[lang]}
                            name='surname'
                            rules={[
                                {
                                    required: true,
                                    message: req_surname[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* Name */}
                        <Form.Item
                            label={name[lang]}
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: req_name[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* Father name */}
                        <Form.Item
                            label={father_name[lang]}
                            name='father_name'
                            rules={[
                                {
                                    required: true,
                                    message: req_father_name[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* text */}
                    <Col span={8}>
                        <p>{comment_input[lang]}</p>
                    </Col>
                    <Col span={8}/>
                    {/* phone */}
                    <Col span={8}>
                        {/* personal_num */}
                        <Form.Item
                            label={personal_num[lang]}
                            name='personal_num'
                            rules={[
                                {
                                    required: true,
                                    message: req_personal_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* qarindosh_num */}
                        <Form.Item
                            label={qarindosh_num[lang]}
                            name='qarindosh_num'
                            rules={[
                                {
                                    required: true,
                                    message: req_qarindosh_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* phone */}
                    <Col span={8}>
                        {/* home_num */}
                        <Form.Item
                            label={home_num[lang]}
                            name='home_num'
                            rules={[
                                {
                                    required: true,
                                    message: req_home_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* qarindosh_num */}
                        <Form.Item label={qarindosh_num[lang]} name='qarindosh_num'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* text */}
                    <Col span={8}>
                        <p>{comment_num[lang]}</p>
                    </Col>
                    {/* salary */}
                    <Col span={8}>
                        <div className='ms-4 p-3' style={{backgroundColor: '#F3BB04'}}>
                            <Checkbox name='salary' onChange={e => setSalaryd(e.target.checked)}>
                                {salary[lang]}
                            </Checkbox>
                        </div>
                        {/* how_much */}
                        <Form.Item
                            label={how_much[lang]}
                            name='how_much'
                            className='mt-4'
                            rules={[
                                {
                                    required: salaryd,
                                    message: req_home_num[lang],
                                },
                            ]}
                        >
                            <Input disabled={!salaryd}/>
                        </Form.Item>
                    </Col>
                    <Col span={16}/>
                    {/* photos */}
                    <Col span={16}>
                        <p className='text-center'>{passport[lang]}</p>
                    </Col>
                    {/* select photo */}
                    <Col span={8}/>
                    <Col span={8} className='text-end mb-2'>
                        <input type="file" onChange={event => handleChange(event)} multiple/>
                    </Col>
                    <Col span={16}>{passportid1[lang]}</Col>
                    <Col span={6}>
                        <div className='m-5'>
                            <img src={image1} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='m-5'>
                            <img src={image2} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='m-5'>
                            <img src={image3} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    {/*<Col span={18}>*/}
                    {/*    <div className='d-flex mx-5'>*/}
                    {/*        <p className='text-danger fw-bold me-2'>!!!{note[lang]}</p>*/}
                    {/*        <p dangerouslySetInnerHTML={createMarkup1()}/>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    <Col span={6}>
                        <div className='ms-5 mt-0'>
                            <p style={{fontSize: 14}} dangerouslySetInnerHTML={createMarkup2()}/>
                        </div>
                    </Col>
                    <Col span={12} className='px-5'>
                        <p dangerouslySetInnerHTML={createMarkup()}/>
                        <Checkbox>{check[lang]}</Checkbox>
                    </Col>
                    <Col span={12} className='text-end'>
                        <Button
                            className='me-5'
                            htmlType='submit'
                            type='primary'
                            style={{borderRadius: 8}}
                        >
                            {yuborish[lang]}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default CreditAuto
