

import SliderHomepage from '../../components/HomePagelider/Slider'
import HomePageMiniMenu from '../../components/HomePageMiniMenu/HomePageMiniMenu'
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
          <SliderHomepage />
          <HomePageMiniMenu />
          <HomePageProducts />
        </div>
    )
}

export default HomePage
