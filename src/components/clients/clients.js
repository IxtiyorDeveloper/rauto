import React from 'react';
import {Button, Table} from "antd";

function Clients({dataSource,deleteClient}) {
    const columns = [
        {
            title: 'Ism',
            dataIndex: 'ismizuz',
            key: 'ismizuz',
        },
        {
            title: 'Viloyati',
            dataIndex: 'ismizru',
            key: 'ismizru',
        },
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },
        {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteClient(props)}>O'chirish</Button>
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

export default Clients;
