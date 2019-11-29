import { Table } from 'antd';
import React, { Component } from 'react'

export default class TableNguoiDung extends Component {

    columns = [
        { title: 'TaiKhoan', dataIndex: 'taiKhoan', key: 'taiKhoan' },
        { title: 'Ho va Ten', dataIndex: 'hoTen', key: 'hoTen' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'So dien thoai', dataIndex: 'soDt', key: 'soDt' },
        { title: 'Loai Nguoi Dung', dataIndex: 'maLoaiNguoiDung', key: 'maLoaiNguoiDung' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <a>Update</a>,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <a>Delete</a>,
        },
    ];


    renderDanhsachNgDung = () => {
        
        let {mangNguoiDung} = this.props;
        let dataNgDung = [];
        return mangNguoiDung.map((ngDung,index) => {
            return dataNgDung = 
                {
                    key : index,
                    taiKhoan : ngDung.taiKhoan,
                    hoTen : ngDung.hoTen,
                    email : ngDung.email,
                    soDt : ngDung.soDt,
                    maLoaiNguoiDung : ngDung.maLoaiNguoiDung,
                }
            
        })
    }


    render() {

        let data = this.renderDanhsachNgDung();
        console.log("TCL: TableNguoiDung -> render -> data", data)
        
        
        return (
            <div>
                <Table
                    columns={this.columns}
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                />
            </div>
        )
    }
}

