import React from 'react';
import {Button, Table} from "antd";

function Users({dataSource, isbank = false, deleteBank}) {
    const columns = [
        isbank ? {
            title: 'Bank nomi',
            dataIndex: 'bank_name',
            key: 'bank_name',
            render: () => {
                return (
                    <div>
                        Hamkorbank
                    </div>
                )
            }
        } : {},
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteBank(props)}>O'chirish</Button>
                )
            }
        },
        isbank ? {
            title: "O'zgartirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost">Edit</Button>
                )
            }
        } : {},
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Users;
