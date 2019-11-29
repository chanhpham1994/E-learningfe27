import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { layDanhSachNguoiDung } from '../../Redux/actions/QuanLyNgDungAction';
import TableNguoiDung from '../../Component/AdminComponent/TableNguoiDung';

function ThongTinnguoiDung(props) {

    useEffect(()=>{
        props.layDanhSachNguoiDung();
    },[])




    return (
        <div>
            <h3>Thong Tin Nguoi Dung</h3>
            {/* {renderDanhsachNgDung()} */}
            <TableNguoiDung mangNguoiDung={props.mangNguoiDung}/>
        </div>
    )
}

const mapState = (state) => {
    return {
        mangNguoiDung: state.ElearningReducer.mangNguoiDung
    }
}

const mapDispatch = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => { dispatch(layDanhSachNguoiDung()) }
    }
}


export default connect(mapState, mapDispatch)(ThongTinnguoiDung)