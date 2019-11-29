import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { settings } from '../Common/Config/Setting';


import SiderDemo from '../Component/AdminComponent/Admin';




const AdminLayout = ({ ...props }) => {
    return <Fragment>

        <SiderDemo { ...props } />

    </Fragment>
}

export const AdminTemplate = ({ Component, ...props }) => {
    // if (localStorage.getItem(settings.token)) {
        return <Route {...props} render={(propsComponent) => {
            return <AdminLayout>
                <Component {...propsComponent} />
            </AdminLayout>
        }} />
    // }
    // alert('Vui long dang nhap!!')

}
