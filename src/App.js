import { hot } from "react-hot-loader/root";
import { useMediaQuery } from "react-responsive";
import "App.less";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Header from "apps/petition/components/header";
import Aside from "apps/petition/components/aside";
import Main from "apps/petition/components/main";

const App = () => {
  return (
    <div className="App">
      <div id="main">
        <Header />
        <Aside />
        <div id="wrapper">
          <Main />
        </div>
        <div className="element">
          <div className="element-item"></div>
        </div>
      </div>
    </div>
  );
};

export default hot(App);
