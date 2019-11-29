import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';

export default function HeaderComponent() {
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
        <Button key="1" type="danger">
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

