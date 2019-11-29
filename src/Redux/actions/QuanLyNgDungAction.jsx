import {actionTypeNgDung} from '../constants/QuanLyNguoiDungConstant';
import {settings} from '../../Common/Config/Setting';
import axios from 'axios';

export const layDanhSachNguoiDung = () =>{
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
        .catch(err=> {
            console.log(err.response.data);
        })
    }
}   