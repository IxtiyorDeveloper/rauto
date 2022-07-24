import { Card, Col, Row } from 'antd'

const Application_page = () => {
    return (
        <div className='bg-white p-4 w-100'>
            <h4>Hujjatlar rasmlari</h4>
            <Row gutter={16}>
                <Col span={4}>
                    <Card className='py-5' />
                </Col>
                <Col span={4}>
                    <Card className='py-5' />
                </Col>
                <Col span={4}>
                    <Card className='py-5' />
                </Col>
            </Row>
            <hr />

            <table className='table table-hover table-bordered'>
                <thead className='thead-dark'>
                    <tr className='textAlign'>
                        <th scope='col'>F.I.Sh</th>
                        <td>Familya</td>
                        <td>Ism</td>
                        <td>Sharif</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody className='thead-dark'>
                    <tr>
                        <th>Tel. raqamlari</th>
                        <td>Shaxsiy raqam: +998 123 45 67</td>
                        <td>Uy raqami / 2-shax. raq: +998 123 45 67</td>
                        <td>Yaqin qarindosh: +998 123 45 67</td>
                        <td>Yaqin qarindosh: +998 123 45 67</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Application_page
