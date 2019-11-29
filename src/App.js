import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { AdminTemplate } from './Template/AdminTemplate';
import ThongTinnguoiDung from './Pages/AdminPages/ThongTinnguoiDung';
import AdminPage from './Pages/AdminPages/AdminPage';
import ThemNguoiDung from './Pages/AdminPages/ThemNguoiDung';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>

              <AdminTemplate path="/admin" Component={AdminPage}/>
              <AdminTemplate path="/themNguoiDung" Component={ThemNguoiDung}/>
              <AdminTemplate path='/thongTinNguoiDung' Component={ThongTinnguoiDung}/>

              <Route path='/login' component={LoginPage}/>
              

          </Switch>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
