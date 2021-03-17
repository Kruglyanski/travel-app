//@ts-nocheck

import React from 'react'
import {YMaps, Map, Placemark, FullscreenControl} from 'react-yandex-maps'


export const YAMap = ({coords}) => {
    const mapData = {
        center: coords,
        zoom: 10,
    }
    return(
        <YMaps className='map'>
            <div id="map-basics">
                <Map state={mapData} style={{width: '60vw', height: '33.75vw'}} >
                    <Placemark geometry={coords} />
                    <FullscreenControl />
                </Map>

            </div>
        </YMaps>



    )
}


