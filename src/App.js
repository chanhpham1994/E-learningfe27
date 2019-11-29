import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { AdminTemplate } from './Template/AdminTemplate';
import ThongTinnguoiDung from './Pages/AdminPages/ThongTinnguoiDung';
import AdminPage from './Pages/AdminPages/AdminPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>

              <AdminTemplate path="/admin" Component={AdminPage}/>
              <AdminTemplate path='/thongTinNguoiDung' Component={ThongTinnguoiDung}/>
              

          </Switch>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
