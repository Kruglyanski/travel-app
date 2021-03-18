import React, {useEffect, useState} from 'react'
import {message, Rate} from 'antd'
import {Card, Typography} from 'antd'
import {CountryType, getRate, setRate} from '../../redux/countryReducer'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import {useTranslation} from 'react-i18next'


const {Meta} = Card
const ellipsis = {
    suffix: ' '
}
type PropsType = {
    country: CountryType
}


export const CardCustom: React.FC<PropsType> = ({country}) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    const userId = useSelector((state: RootStateType) => state.auth.userId)
    const rate = useSelector((state: RootStateType) => state.countries.rate)
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
    const [isDisabled, setIsDisabled] = useState(false)
    const [countryRate, setCountryRate] = useState(0)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const filteredRate = rate.filter((i: any) => i.countryId == country._id)
        let totalRate = 0
        for (let i = 0; i < filteredRate.length; i++) {
            totalRate = totalRate + Number(filteredRate[i].value)
        }

        setCountryRate(Math.round(totalRate / filteredRate.length))

    }, [rate])


    const cardHandler = () => {
        history.push(`/` + country._id)
    }
    const countryId = country._id
    const onRateChange = (rate: number) => {

        if (isAuthenticated) {
            const value = rate.toString()
            dispatch(setRate({value, userId, countryId}))
            dispatch(getRate())
            setIsDisabled(true)
        } else {
            message.warning('Войдите, чтобы оставить оценку')
        }
    }

    return (

        <Card
            hoverable
            style={{width: 300}}
            cover={
                <img onClick={cardHandler}
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
                        {country.capital}
                    </Typography.Text>}
            />
            <Rate
                onChange={onRateChange}
                disabled={isDisabled}
                value={countryRate}
            />

        </Card>
    )
}






