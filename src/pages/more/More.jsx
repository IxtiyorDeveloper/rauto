import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Language } from '../../lang/Languages'
import star_img from '../../assets/icons/star.png'
import star_b_img from '../../assets/icons/star_bold.png'
import paint_img from '../../assets/icons/paint.png'
import date_img from '../../assets/icons/date.png'
import cube_img from '../../assets/icons/cube.png'
import fuel_img from '../../assets/icons/fuel.png'
import setting_img from '../../assets/icons/setting.png'
import car_img from '../../assets/icons/car.png'
import speed_img from '../../assets/icons/speed.png'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from 'antd'

function More() {
    const { id } = useParams()
    const [data, setData] = useState({ ismiz: '', phone: '' })
    const [car, setCar] = useState(null)

    const { lang } = useSelector(state => state.lang)

    const { mark, m7, m8, m9, m10, m11, m12, m13, m14, m5, m1, m2, m3, m4, kredit } = Language

    const order = async () => {
        await axios
            .post('http://185.196.214.145:5000/order/add', { ...data, id })
            .then(res => setData({ ismiz: ' ', phone: ' ' }))
            .catch(err => new Error(err))
    }

    function createMarkup() {
        return { __html: lang === '0' ? car.opisaniya : car.opisaniyaru }
    }

    useEffect(() => {
        axios
            .get(`http://185.196.214.145:5000/Car/${id}`)
            .then(res => setCar(res.data))
            .catch(err => console.log(err))
    }, [])

    return car ? (
        <main>
            <section className='about'>
                <div className='about__title'>
                    <span></span> <h2>{car.madel}</h2> <span></span>
                </div>
                <div className='about__container'>
                    <div className='about__slider'>
                        <Swiper
                            pagination={{ type: 'progressbar' }}
                            navigation={true}
                            loop={true}
                            modules={[Autoplay, Navigation, Pagination]}
                            className='mySwiper'
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {car.photo.map(photo => (
                                <SwiperSlide>
                                    <img src={photo} alt='img' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='about__card'>
                        <p className='about__text'>
                            <img src={star_img} alt='star' /> {mark[lang]} : . . . . . . . . . . . .
                            . . {car.marka}
                        </p>
                        <p className='about__text'>
                            <img src={star_b_img} alt='star' /> {m7[lang]} : . . . . . . . . . . . .
                            . . {car.madel}
                        </p>
                        <p className='about__text'>
                            <img src={paint_img} alt='star' /> {m8[lang]} : . . . . . . . . . . . .
                            . . . . . {lang === '0' ? car.color : car.colorru}
                        </p>
                        <p className='about__text'>
                            <img src={date_img} alt='star' /> {m9[lang]} : . . . . . . . . . . . . .
                            . {car.yili}
                        </p>
                        <p className='about__text'>
                            <img src={cube_img} alt='star' /> {m10[lang]} : . . . . . . . . . . .
                            {car.divigitel}
                        </p>
                        <p className='about__text'>
                            <img src={fuel_img} alt='star' /> {m11[lang]}:. . . . . . . . . . . . .
                            . . . . . {lang === '0' ? car.yoqilgi : car.yoqilgiru}
                        </p>
                        <p className='about__text'>
                            <img src={setting_img} alt='star' /> {m12[lang]} : . . . . . . . . . .
                            {lang === '0' ? car.transmission : car.transmissionru}
                        </p>
                        <p className='about__text'>
                            <img src={car_img} alt='star' /> {m13[lang]} : . . . . . . . . . . . . .
                            . . . . {lang === '0' ? car.kuzuv : car.kuzuvru}
                        </p>
                        <p className='about__text'>
                            <img src={speed_img} alt='star' /> {m14[lang]}: . . . . . . . . . . . .
                            . . . . . {car?.yurgani}
                        </p>
                    </div>
                    <div className='sale-card'>
                        <div className='sale-card_wrapper'>
                            <span className='card-price card-price_sum'>
                                {m5[lang]}
                                <span className='valyut_uzb'></span>
                            </span>
                            <span className='card-price'>
                                {Number(car.narxi).toLocaleString().replace(/,/g, ' ')} UZS
                            </span>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>person</span>
                                <input
                                    onChange={e => setData({ ...data, ismiz: e.target.value })}
                                    value={data.ismiz}
                                    type='text'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={m1[lang]}
                                />
                            </div>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>phone</span>
                                <input
                                    onChange={e => setData({ ...data, phone: e.target.value })}
                                    value={data.phone}
                                    type='number'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={m2[lang]}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='me-2'>
                                <Link to={`/credit/${car._id}`}>{kredit[lang]}</Link>
                            </Button>
                            <Button className='ms-2' onClick={order}>
                                {m3[lang]}
                            </Button>
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='comment_title'>
                            <h4 type='button'>{m4[lang]}</h4>
                        </div>
                        <div className='comment_card'>
                            <h4 className='comment_first'>
                                <span></span>
                                <h2>{car.madel}</h2>
                                <span></span>
                            </h4>
                            <div
                                className='comment_second'
                                dangerouslySetInnerHTML={createMarkup()}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    ) : (
        <h1>No data</h1>
    )
}

export default More
