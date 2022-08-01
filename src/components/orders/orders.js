import React from 'react';
import {Button, Table} from "antd";

function Orders({dataSource,deleteOrder}) {

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Buyurtirilgan moshina id',
            dataIndex: 'carId',
            key: 'carId',
        },
        {
            title: 'Telefon',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteOrder(props)}>O'chirish</Button>
                )
            }
        },
    ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Orders;
