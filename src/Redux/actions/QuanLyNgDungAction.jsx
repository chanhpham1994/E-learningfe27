import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';
import { settings } from '../../Common/Config/Setting';
import Swal from 'sweetalert2'
import axios from 'axios';

export const dangNhap = (thongTinNguoiDung,moveToAdminPage) => {
    return dispacth => {
        axios({
            url: settings.domain + `QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: thongTinNguoiDung
        })
            .then(res => {

                console.log(res.data);
                Swal.fire(
                    'Đăng Nhập Thành Công!',
                    'You clicked the button!',
                    'success'
                )
                moveToAdminPage();
            })
            .catch(err => {
                console.log(err.response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    }
}

export const dangXuat = (moveToLoginPage) => {
    return dispacth => {

        moveToLoginPage();

    }
}

export const layDanhSachNguoiDung = () => {
    return dispacth => {
        axios({
            url: settings.domain + `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
            method: 'GET',
        })
            .then(res => {
                dispacth({
                    type: actionTypeNgDung.LAY_DANH_SACH_NG_DUNG,
                    mangNguoiDung: res.data
                })
                console.log(res.data);

            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
}   