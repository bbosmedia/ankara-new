

import SliderHomepage from '../../components/HomePagelider/Slider'
import HomePageMiniMenu from '../../components/HomePageMiniMenu/HomePageMiniMenu'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import './HomePage.css'

const HomePage = ({lang}) => {
    return (
        <div>
          <SliderHomepage />
          <HomePageMiniMenu lang={lang} />
          <HomePageProducts lang={lang} />
        </div>
    )
}

export default HomePage
