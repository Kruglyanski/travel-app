//@ts-nocheck
import { YMaps, Map, Placemark } from "react-yandex-maps"



// const coordinates = [
//     [55.684758, 37.738521],
//     [57.684758, 39.738521]
// ]

export const YAMap = ({coords}) => {
    const mapData = {
        center: coords,
        zoom: 5,
    }
    return(
        <YMaps>
            <Map defaultState={mapData}>
                <Placemark geometry={coords} />
            </Map>
        </YMaps>
    )
}


