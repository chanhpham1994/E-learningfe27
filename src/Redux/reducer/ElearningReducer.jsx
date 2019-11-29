import {actionTypeNgDung} from '../constants/QuanLyNguoiDungConstant';

const initialState = {
    mangNguoiDung : []
}

export const ElearningReducer =  (state = initialState, action) => {
   
    switch (action.type) {

        case actionTypeNgDung.LAY_DANH_SACH_NG_DUNG:
            
            state.mangNguoiDung = action.mangNguoiDung;

            return {...state}
            
 
        default:
         return {...state}
    }
}
