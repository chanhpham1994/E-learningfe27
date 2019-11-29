import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { AdminTemplate } from './Template/AdminTemplate';
import ThongTinnguoiDung from './Pages/AdminPages/ThongTinnguoiDung';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>

              <AdminTemplate path='/' Component={ThongTinnguoiDung}/>
              {/* <AdminTemplate/> */}

          </Switch>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
