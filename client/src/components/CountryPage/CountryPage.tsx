import React, {useEffect, useState} from 'react'
import {Image} from 'antd'
import './CountryPage.css'
import {fetchCountry} from '../../redux/countryReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
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
    const {pathname} = useLocation()
    const currentCountry = useSelector((state: RootStateType) => state.countries.currentCountry)
    const language = useSelector((state: RootStateType) => state.app.language)
    const [capital, setCapital] = useState('Столица')
    const [places, setPlaces] = useState('Интересные места')
    const [video, setVideo] = useState('Видео')
    const [map, setMap] = useState('Карта')
    useEffect(() => {
        if (language === 'en') {
            setCapital('Capital')
            setPlaces('Sights')
            setVideo('Video')
            setMap('Map')
        } else if (language === 'de') {
            setCapital('Hauptstadt')
            setPlaces('Sehenswürdigkeiten')
            setVideo('Video')
            setMap('Karte')
        } else {
            setCapital('Столица')
            setPlaces('Интересные места')
            setVideo('Видео')
            setMap('Карта')

        }
    }, [language])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        dispatch(fetchCountry({id:props.match.params.id, lang:language}))
    }, [language])

    return (
        <>
            {
                currentCountry &&
                <div className='countryPageContent'>
                    <div className='upperRow'>
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
                                    {capital}: <b>{currentCountry.capital}</b>
                                </p>
                                <p className='countryDescription'>
                                    {currentCountry.description}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Currency currency={currentCountry.currency}/>
                            <Weather/>
                            <Time/>
                        </div>
                    </div>

                    <div className="carousel">
                        <h2 className='subTitle'>{places}</h2>
                        <Carousel
                            dotPosition='top'
                            autoplay
                            effect="fade"
                        >
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
                    <div className='video'>
                        <h2 className='subTitle'>{video}</h2>
                        {/*@ts-ignore*/}
                        <ReactPlayer
                            width={'60vw'}
                            height={'33.75vw'}
                            url={currentCountry.videoUrl}
                            controls={true}
                        />
                    </div>
                    <div className='map'>
                        <h2 className='subTitle'>{map}</h2>
                        <YAMap coords={currentCountry.capitalLocation.coordinates}/>
                    </div>
                </div>
            }
        </>
    )
}

export default withRouter(CountryPage)