import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Index = () =>{
  return (<>
    <aside className="left-header">
          <span className="lh_dec color-bg"></span>
          <div className="left-header_social">
              <ul >
                  <li><a href="https://www.facebook.com/greenpeacehk/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg"/>
                  </a></li>
              </ul>
          </div>
      </aside>
      <div className="share-btn showshare color-bg"><span>分享 <FontAwesomeIcon icon={['fab', 'creative-commons-share']} size="lg"/></span></div>
      <div className="hc_dec_color">
          <div className="page-subtitle"><span>已聯署人數: 1,000,999</span></div>
      </div>
  </>
  );
}

export default Index;
