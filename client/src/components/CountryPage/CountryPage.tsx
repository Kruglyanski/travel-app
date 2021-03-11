//@ts-nocheck
import React, {useEffect} from 'react'
import {Image} from 'antd'
import './CountryPage.css'
import {fetchCountry} from '../../redux/countryReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {RootStateType} from '../../redux/rootReducer'
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}
type MatchParams = {
    id: string
}
const CountryPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const dispatch = useDispatch()
    const currentCountry = useSelector((state: RootStateType) => state.countries.currentCountry)


    useEffect(() => {
        dispatch(fetchCountry(props.match.params.id))
    }, [])

    return (
        <>
            {
                currentCountry &&
                <div className='countryPageContent'>
                    <div className='countryInfo'>
                        <Image
                            src={currentCountry.imageUrl}
                        />
                        <div className="text">
                            <h2 className='title'>
                                {currentCountry.name}
                            </h2>
                            <p className='capital'>
                                Столица: <b>{currentCountry.capital}</b>
                            </p>
                            <p className='countryDescription'>
                                {currentCountry.description}
                            </p>
                        </div>
                    </div>
                    <div></div>
                    <div className="carousel">

                        <Carousel effect="fade">
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            }
        </>
    )
}

export default withRouter(CountryPage)