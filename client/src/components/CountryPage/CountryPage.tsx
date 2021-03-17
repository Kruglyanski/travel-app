//@ts-nocheck
import React, {useEffect} from 'react'
import {Image} from 'antd'
import './CountryPage.css'
import {fetchCountry, getCurrency} from '../../redux/countryReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import { useLocation } from "react-router-dom"
import {RootStateType} from '../../redux/rootReducer'
import {Carousel} from 'antd'
import {YAMap} from '../Map/Map'
import ReactPlayer from 'react-player'
import {Currency} from '../Currency/Currency'
import {Weather} from '../Weather/Weather'
import {Time} from '../Time/Time'

type MatchParams = {
    id: string
}
const CountryPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const dispatch = useDispatch()

    const { pathname } = useLocation()


    const currentCountry = useSelector((state: RootStateType) => state.countries.currentCountry)

        useEffect(() => {
            window.scrollTo(0, 0)
        }, [pathname])

    useEffect(() => {
        dispatch(fetchCountry(props.match.params.id))
    }, [])

    return (
        <>
            {
                currentCountry &&
                <div className='countryPageContent'>
                    <div className='countryInfo'>
                        <div className='countryImg'>
                            <Image
                                src={currentCountry.imageUrl}
                            />
                        </div>
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
                    <div>
                        <Currency currency={currentCountry.currency}/>
                        <Weather />
                        <Time/>
                    </div>
                    <div className="carousel">
                        <h2 className='placesTitle'>Интересные места</h2>
                        <Carousel  autoplay effect="fade">
                            {currentCountry.places.map((i, index) => {
                                return (
                                    <div key={index}>
                                        <Image className='carouselImg' src={i.photoUrl}/>
                                        <h3>{i.name}</h3>
                                        <p>{i.description}</p>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div></div>
                    <div>
                        <ReactPlayer
                            url={currentCountry.videoUrl}
                            controls={true}
                        />
                    </div>
                    <div></div>
                    <div>
                        <YAMap coords={currentCountry.capitalLocation.coordinates}/>
                    </div>
                </div>
            }
        </>
    )
}

export default withRouter(CountryPage)