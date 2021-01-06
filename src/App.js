import { hot } from "react-hot-loader/root";
import { useMediaQuery } from "react-responsive";
import "App.less";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'rsuite/lib/styles/index.less';
import "react-sliding-pane/dist/react-sliding-pane.css";
import Header from "apps/petition/components/header";
import Aside from "apps/petition/components/aside";
import Main from "apps/petition/components/main";
import Panel from "apps/petition/components/panel";
import RegistrationForm from "apps/petition/components/main/registrationForm"

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
        <Panel/>
      </div>
      <div className="custom-form-wrap">
        <RegistrationForm/>
      </div>
      <Panel/>
    </div>
  );
};

export default hot(App);
