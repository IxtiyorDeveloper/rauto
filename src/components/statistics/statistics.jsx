import { useState, useEffect } from 'react'
import car from '../../images/car.png'
import pageIcon from '../../images/landing-page.png'
import priceTag from '../../images/price-tag.png'
import order from '../../images/order.png'
import axios from 'axios'


function Statistics() {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('http://185.196.214.145:5000/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        axios.get('http://185.196.214.145:5000/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    const [pages, setPages] = useState([])
    useEffect(() => {
        axios.get('http://185.196.214.145:5000/sub_categories/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPages(data)
            });
    }, [])
    return (
        <>
            <div className="row pt-3 statistics_wrapper">
                <h3>Saytdagi kontentlar statistikasi</h3>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={priceTag} alt="" width={35} />
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Maxsus takliflar</h5>
                            </div>
                            <h3 className="mt-4">
                                {announcements.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={car} alt="" width={35} />
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Avtomobillar</h5>
                            </div>
                            <h3 className="mt-4">
                                {news.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={order} alt="" width={35} />
                            </div>
                            <div>
                                <h5 className="font-16">Barcha buyurtmalar</h5>
                            </div>
                            <h3 className="mt-4">
                                {news.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card  bg-primary_all">
                        <div className="card-heading p-4">
                            <div className="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25} />
                            </div>
                            <div>
                                <h5 className="font-16">Barcha Sahifalar</h5>
                            </div>
                            <h3 className="mt-4">
                                {pages.length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
