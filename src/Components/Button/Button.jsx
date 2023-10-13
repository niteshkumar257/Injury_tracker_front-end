import React from 'react'
import{Button,ConfigProvider,Space} from "antd";

const ButtonComponent = () => {
  return (
    
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Space>
      <Button type="primary">Submit</Button>
     
    </Space>
  </ConfigProvider>
  )
}

export default ButtonComponent