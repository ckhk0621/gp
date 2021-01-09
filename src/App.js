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
      </div>
      <div className="custom-form-wrap">
        <RegistrationForm/>
      </div>
      <Panel/>
      {/* MC_FORM_STARTS */}
  {/* <form method="post" action="https://cloud.greenhk.greenpeace.org/petition-pp" id="mc-form">
    <input type="hidden" name="numSignupTarget" value="123456" />
    <input type="hidden" name="numResponses" value="78901" />

    <input placeholder="FirstName" name="FirstName" type="text" value="" />
    <input placeholder="LastName" name="LastName" type="text" value="" />
    <input placeholder="Email" name="Email" type="email" value="" />
    <input placeholder="MobilePhone" name="MobilePhone" type="tel" value="" />
    <input placeholder="Birthdate" name="Birthdate" type="text" value="" />
    <input placeholder="MobileCountryCode" name="MobileCountryCode" type="text" value="852" />
    <input placeholder="OptIn" name="OptIn" type="checkbox" value="" />

    <input type="hidden" name="req" value="post_data" />
    <input type="hidden" name="LeadSource" value="Petition - Plastics" />
    <input type="hidden" name="Petition_Interested_In_Arctic__c" value="false" />
    <input type="hidden" name="Petition_Interested_In_Climate__c" value="false" />
    <input type="hidden" name="Petition_Interested_In_Forest__c" value="false" />
    <input type="hidden" name="Petition_Interested_In_Health__c" value="false" />
    <input type="hidden" name="Petition_Interested_In_Oceans__c" value="false" />
    <input type="hidden" name="Petition_Interested_In_Plastics__c" value="true" />
    <input type="hidden" name="CampaignId" value="7010k000000iJ7aAAE" />
    <input type="hidden" name="UtmMedium" value="" />
    <input type="hidden" name="UtmSource" value="" />
    <input type="hidden" name="UtmCampaign" value="" />
    <input type="hidden" name="UtmContent" value="" />
    <input type="hidden" name="UtmTerm" value="" />
    <input type="hidden" name="DonationPageUrl" value="https://www.greenpeace.org/eastasia/" />
    <input name="req" type="hidden" value="post_data" />
  </form> */}
  {/* MC_FORM_ENDS */}
    </div>
  );
};

export default hot(App);
