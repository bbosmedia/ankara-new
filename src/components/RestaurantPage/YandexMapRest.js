import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMapRest = ({lang, setPagename, maps}) => {
    if(lang === '/en'){
        return(
            <div className='yandex-map-de'>
                <div className='yandexmap'>
                    <YMaps onClick={(e) => console.log(e)} >
                <Map style={{height: "100%"}} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }}>
                <Placemark defaultGeometry={[41.3308916, 69.2450557]} options={{
                iconLayout: 'default#image',
                iconImageHref: 'images/placemarker.png',
                iconImageSize: [70, 70],
                }}
                />
                </Map>
            </YMaps>
                </div>
            <div className='yandex-map-buttonsa'>
               <div className="ya-res-cn"><button className="btn btn-default ya-btn-red">
                  Map
                  </button> <button className="btn btn-default ya-btn-gray" onClick={()=>setPagename()}>
                  List
                  </button>
               </div>
            </div>
            </div>
        )
    }else if(lang === '/uz'){
        return(
            <div className='yandex-map-de'>
                <div className='yandexmap'>
                    <YMaps>
                <Map style={{height: "100%"}} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }}>
                <Placemark defaultGeometry={[41.3308916, 69.2450557]} options={{
                iconLayout: 'default#image',
                iconImageHref: 'images/placemarker.png',
                iconImageSize: [70, 70],
                }}
                />
                </Map>
            </YMaps>
                </div>
            <div className='yandex-map-buttonsa'>
               <div className="ya-res-cn"><button className="btn btn-default ya-btn-red">
                  Xarita
                  </button> <button className="btn btn-default ya-btn-gray" onClick={()=>setPagename()}>
                  Ro'yxat
                  </button>
               </div>
            </div>
            </div>
        )
    }else{
        return(
            <div className='yandex-map-de'>
                <div className='yandexmap'>
                    <YMaps>
                <Map style={{height: "100%"}} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }}>
                <Placemark defaultGeometry={[41.3308916, 69.2450557]} options={{
                iconLayout: 'default#image',
                iconImageHref: 'images/placemarker.png',
                iconImageSize: [70, 70],
                }}
                />
                </Map>
            </YMaps>
                </div>
            <div className='yandex-map-buttonsa'>
               <div className="ya-res-cn"><button className="btn btn-default ya-btn-red">
                  Карта
                  </button> <button className="btn btn-default ya-btn-gray" onClick={()=>setPagename()}>
                  Список
                  </button>
               </div>
            </div>
            </div>
        )
    }
}

export default YandexMapRest
