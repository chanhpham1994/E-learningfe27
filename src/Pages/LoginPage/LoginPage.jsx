import React, { Component } from 'react';
import { Row, Col } from 'antd';
import backGroungIMG from '../../Assets/img/login--walpaper.png';
import {connect} from 'react-redux';
import {dangNhap} from '../../Redux/actions/QuanLyNgDungAction';

class LoginPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             thongTin: {
                 matKhau: '',
                 taiKhoan: ''
             }
        }
    }

    moveToAdminPage = () => {
        this.props.history.push('/admin');
    }

    handleChange = (event) => {

        const {name,value} =  event.target;

        this.setState({
            thongTin : {...this.state.thongTin, [name] : value}
        })

    }
    

    handleSubmit = (event) => {

        event.preventDefault();

        this.props.dangNhap(this.state.thongTin,this.moveToAdminPage)

    }
 
    render() {
        return (
            <div className="login">
                <Row>
                    <Col className="login--img" span={18}>
                        <img src={backGroungIMG} alt=""/>
                        
                        
                    </Col>
                    <Col className="login--text" span={6}>
                        
                        <form onSubmit={this.handleSubmit}>

                            <div>
                                <label className="text" htmlFor="">USERNAME</label> <br/>
                                <input className="input" name="taiKhoan" onChange={this.handleChange} type="text" placeholder="username"/>
                            </div> 

                            <div>
                                <label className="text" htmlFor="">PASSWORD</label> <br/>
                                <input className="input" name="matKhau" onChange={this.handleChange} type="text" placeholder="password"/>
                            </div>

                            <div>
                                <input type="checkbox"/> Remember me.
                            </div>

                            <button className='login--button'>Login</button>
                        </form>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        dangNhap : (thongTin,moveToAdminPage) => {dispatch(dangNhap(thongTin,moveToAdminPage))}
    }
}


export default connect(null,mapDispatch)(LoginPage);

