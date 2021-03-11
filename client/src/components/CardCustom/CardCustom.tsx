import React from 'react'

import {Card, Avatar, Typography} from 'antd'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons'
import {CountryType} from '../../redux/countryReducer'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'

const {Meta} = Card
const ellipsis = {
    suffix: ' '
}
type PropsType = {
    country: CountryType
}


export const CardCustom: React.FC<PropsType> = ({country}) => {


    return (
        <Link to={'/' + country._id}>
            <Card
                hoverable
                style={{width: 300}}
                cover={
                    <img
                        style={{height: 200}}
                        alt={country.name}
                        src={country.imageUrl}
                    />
                }
            >
                <Meta
                    title={country.name}
                    description={
                        <Typography.Text ellipsis={
                            ellipsis
                        }
                        >
                            {country.description}
                        </Typography.Text>}
                />
            </Card>
         </Link>

    )
}






