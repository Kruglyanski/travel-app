import React from 'react'

import {Card, Avatar} from 'antd'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons'

const {Meta} = Card

export const CardCustom = () => {
    return (
        <Card
            hoverable
            style={{width: 300}}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Meta

                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}






