import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, Col, Collapse, Input, Radio, Row, Select, Slider } from 'antd'
import { Language } from '../../lang/Languages'
import { getCars } from '../../store/car/car'
import CardCar from '../../components/card_car/Card_car'

const Car = ({ addCompare }) => {
    const dispatch = useDispatch()
    const [year, setYear] = useState([2015, 2022])
    const [kilometr, setKilometr] = useState([0, 0])
    const [price, setPrice] = useState([0, 0])

    const { lang } = useSelector(state => state.lang)
    const { cars } = useSelector(state => state.car)

    const { madel, m8, yili, yoqilgi, transmission, yurgani, narxi, kredit } = Language

    useEffect(() => {
        dispatch(getCars())
    }, [])

    return (
        <Row gutter={20}>
            <Col md={6}>
                <div style={{ backgroundColor: '#f6f6f6' }}>
                    <Collapse bordered={false} defaultActiveKey={[1, 2, 3, 4, 5, 6, 7, 8]}>
                        {/* Model */}
                        <Collapse.Panel header={madel[lang]} key={1}>
                            <Select style={{ width: '100%' }} onChange={() => console.log('hello')}>
                                {[
                                    { value: 'Damas DLX', name: 'Damas DLX' },
                                    { value: 'Damas Labo', name: 'Damas Labo' },
                                    { value: 'Matiz', name: 'Matiz' },
                                    { value: 'Matiz Best', name: 'Matiz Best' },
                                    { value: 'Nexia DOHS', name: 'Nexia DOHS' },
                                    { value: 'Nexia SOHS', name: 'Nexia SOHS' },
                                    { value: 'Nexia-3 1-позиция', name: 'Nexia-3 1-позиция' },
                                    { value: 'Nexia-3 2-позиция', name: 'Nexia-3 2-позиция' },
                                    { value: 'Nexia-3 3-позиция', name: 'Nexia-3 3-позиция' },
                                    { value: 'Nexia-3 4-позиция', name: 'Nexia-3 4-позиция' },
                                    { value: 'Spark 1-позиция', name: 'Spark 1-позиция' },
                                    { value: 'Spark 1-евро позиция', name: 'Spark 1-евро позиция' },
                                    { value: 'Spark 2-позиция', name: 'Spark 2-позиция' },
                                    { value: 'Spark 2-евро позиция', name: 'Spark 2-евро позиция' },
                                    { value: 'Spark 3-позиция', name: 'Spark 3-позиция' },
                                    { value: 'Spark 3-евро позиция', name: 'Spark 3-евро позиция' },
                                    { value: 'Spark 4-позиция', name: 'Spark 4-позиция' },
                                    { value: 'Spark 4-евро позиция', name: 'Spark 4-евро позиция' },
                                    { value: 'Cobalt 1-позиция', name: 'Cobalt 1-позиция' },
                                    { value: 'Cobalt 2-позиция', name: 'Cobalt 2-позиция' },
                                    {
                                        value: 'Cobalt 2-евро позиция',
                                        name: 'Cobalt 2-евро позиция',
                                    },
                                    { value: 'Cobalt 3-позиция', name: 'Cobalt 3-позиция' },
                                    { value: 'Cobalt 4-позиция', name: 'Cobalt 4-позиция' },
                                    {
                                        value: 'Cobalt 4-евро позиция',
                                        name: 'Cobalt 4-евро позиция',
                                    },
                                    {
                                        value: 'Lacetti 1-п L-COMFORT PLUS',
                                        name: 'Lacetti 1-п L-COMFORT PLUS',
                                    },
                                    {
                                        value: 'Lacetti Full CDX A/T Elegant Plus',
                                        name: 'Lacetti Full CDX A/T Elegant Plus',
                                    },
                                    { value: 'Lacetti L-Style MT', name: 'Lacetti L-Style MT' },
                                    { value: 'Lacetti L-Style AT', name: 'Lacetti L-Style AT' },
                                    { value: 'Malibu-1 1-позиция', name: 'Malibu-1 1-позиция' },
                                    { value: 'Malibu-1 2-позиция', name: 'Malibu-1 2-позиция' },
                                    { value: 'Malibu-1 3-позиция', name: 'Malibu-1 3-позиция' },
                                    { value: 'Malibu-2 2.0L LTZ', name: 'Malibu-2 2.0L LTZ' },
                                    { value: 'Malibu-2 2-позиция', name: 'Malibu-2 2-позиция' },
                                    { value: 'Malibu-2 3-позиция', name: 'Malibu-2 3-позиция' },
                                    {
                                        value: 'Tracker-2 1.0T LT AT FWD',
                                        name: 'Tracker-2 1.0T LT AT FWD',
                                    },
                                    {
                                        value: 'Tracker-2 LT AT Redline 1.0L',
                                        name: 'Tracker-2 LT AT Redline 1.0L',
                                    },
                                    {
                                        value: 'Equinox AT 1LT FWD MH',
                                        name: 'Equinox AT 1LT FWD MH',
                                    },
                                    {
                                        value: 'Equinox AT 1LT AWD MH',
                                        name: 'Equinox AT 1LT AWD MH',
                                    },
                                    {
                                        value: 'Equinox AT 3LT AWD MH',
                                        name: 'Equinox AT 3LT AWD MH',
                                    },
                                    {
                                        value: 'Traverse Начальная комплектация',
                                        name: 'Traverse Начальная комплектация',
                                    },
                                    {
                                        value: 'Traverse Premier MY22',
                                        name: 'Traverse Premier MY22',
                                    },
                                    { value: 'Trailblazer LTZ 6АT', name: 'Trailblazer LTZ 6АT' },
                                    {
                                        value: 'Tahoe Начальная комплектация',
                                        name: 'Tahoe Начальная комплектация',
                                    },
                                    { value: 'Tahoe RST MY22', name: 'Tahoe RST MY22' },
                                ].map(item => (
                                    <Select.Option value={item.value} key={item.name}>
                                        {item.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Collapse.Panel>
                        {/* Year */}
                        <Collapse.Panel header={yili[lang]} key={2}>
                            <Slider
                                range
                                min={2015}
                                max={2020}
                                defaultValue={year}
                                onChange={value => setYear(value)}
                                onAfterChange={value => setYear(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={year[0]} />
                                </Col>
                                <Col span={12}>
                                    <Input value={year[1]} />
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Rangi */}
                        <Collapse.Panel header={m8[lang]} key={3}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{ width: '100%' }}
                            >
                                <Row>
                                    {[
                                        { label: 'Oq', value: 'white' },
                                        { label: 'Yorqin kulrang', value: 'light-gray' },
                                        { label: 'Qora Firuza', value: 'light-black' },
                                        { label: "Sarg'ish yashil", value: 'yellow-green' },
                                        { label: 'Kulrang', value: 'gray' },
                                        { label: 'Moviy', value: 'blue' },
                                        { label: 'Qora', value: 'black' },
                                        { label: 'Qizil', value: 'red' },
                                    ].map(item => (
                                        <Col span={12} key={item.label}>
                                            <Checkbox value={item.value}>{item.label}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Yurgani */}
                        <Collapse.Panel header={yurgani[lang]} key={4}>
                            <Slider
                                range
                                min={0}
                                max={300000}
                                defaultValue={kilometr}
                                onChange={value => setKilometr(value)}
                                onAfterChange={value => setKilometr(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={kilometr[0]} addonAfter='km' />
                                </Col>
                                <Col span={12}>
                                    <Input value={kilometr[1]} addonAfter='km' />
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Yoqilgi turi */}
                        <Collapse.Panel header={yoqilgi[lang]} key={5}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{ width: '100%' }}
                            >
                                <Row>
                                    {[
                                        { value: 'Бензин', name: 'Benzin' },
                                        { value: 'Газ-Бензин', name: 'Gaz-Benzin' },
                                        { value: 'Дизель', name: 'Dizel' },
                                        { value: 'Электрокар', name: 'Electrocar' },
                                        { value: 'Гибрид', name: 'Gibrid' },
                                        { value: 'Газ', name: 'Gaz' },
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Checkbox value={item.value}>{item.name}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Transmission */}
                        <Collapse.Panel header={transmission[lang]} key={6}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{ width: '100%' }}
                            >
                                <Row>
                                    {[
                                        { value: 'mexanika', name: 'Mexanika' },
                                        { value: 'avtomat', name: 'Avtomat' },
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Checkbox value={item.value}>{item.name}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                        {/* Price */}
                        <Collapse.Panel header={narxi[lang]} key={7}>
                            <Slider
                                range
                                min={0}
                                max={300000}
                                defaultValue={price}
                                onChange={value => setPrice(value)}
                                onAfterChange={value => setPrice(value)}
                            />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Input value={price[0]} addonAfter="so'm" />
                                </Col>
                                <Col span={12}>
                                    <Input value={price[1]} addonAfter="so'm" />
                                </Col>
                            </Row>
                        </Collapse.Panel>
                        {/* Kredit */}
                        <Collapse.Panel header={kredit[lang]} key={8}>
                            <Checkbox.Group
                                onChange={() => console.log('hello')}
                                style={{ width: '100%' }}
                            >
                                <Row>
                                    {[
                                        { value: false, name: 'Kredit' },
                                        { value: false, name: 'Kredit emas' },
                                    ].map(item => (
                                        <Col span={12} key={item.name}>
                                            <Radio defaultChecked={item.value}>{item.name}</Radio>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Collapse.Panel>
                    </Collapse>
                </div>
            </Col>
            <Col md={18}>
                <Row>
                    {!!cars.length && cars.map((car, index) => (
                        <Col span={8}>
                            <CardCar key={index} car={car} addCompare={addCompare} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}

export default Car
