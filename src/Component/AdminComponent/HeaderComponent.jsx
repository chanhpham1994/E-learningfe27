import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import { PageHeader, Button, Descriptions } from 'antd';
import {dangXuat} from '../../Redux/actions/QuanLyNgDungAction';


class HeaderComponent extends Component {

  moveToLoginPage = () =>{

    this.props.history.replace('/login');

  }


  render() {
    return (
      <div
        style={{
          backgroundColor: '#F5F5F5',
          padding: 24,
        }}
      >
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Admin Page"
          //   subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="danger" onClick={() => this.props.dangXuat(this.moveToLoginPage)}> 
                Log Out
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Chánh Phạm</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>032-961</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2019-10-03</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2019-10-14</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Tân Bình District, Hồ Chí Minh City.
        </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
     dangXuat : (moveToLoginPage) => {dispatch(dangXuat(moveToLoginPage))}
  }
}

export default withRouter(connect(null,mapDispatch)(HeaderComponent));