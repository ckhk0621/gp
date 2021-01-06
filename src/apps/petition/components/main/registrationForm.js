import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  errors,
  ButtonToolbar,
  Button,
  InputPicker,
  InputGroup,
  Input,
  Checkbox
} from "rsuite";
import { Grid, Row, Col } from "rsuite";

let RegistrationForm = ({ togglePanel, toggleTheme }) => {
  const [fullForm, setFullForm] = useState(true);
  const onSubmit = (data) => console.log(data);

  const closeAll = () =>{
    togglePanel(false)
    toggleTheme(false)
  }

  return (
    <div className="custom-gp-form">
      {/* <div>守護香港未來</div>
      <div>一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！我們會將你守護大嶼的聲音，向政府反映。</div> */}
      <div className="form-close" onClick={()=>closeAll()}><FontAwesomeIcon icon={['fas', 'times-circle']} size="lg"/></div>
      <Form>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <ControlLabel>電郵地址 Email Address</ControlLabel>
                <FormControl name="email" type="email" />
              </FormGroup>
            </Col>
          </Row>

            <Row className="show-grid">
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>姓氏 Last Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>名字 First Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <ControlLabel>手提號碼 Phone Number</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>+852</InputGroup.Addon>
                  <Input />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <ControlLabel>出生年份 Year Of Birth</ControlLabel>
                <InputPicker
                  defaultValue="2000"
                  data={[
                    {
                      label: "2000",
                      value: "2000",
                    },
                    {
                      label: "2019",
                      value: "2019"
                    },
                  ]}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={24}>
              <div className="custom-form-reminder">
              <Checkbox defaultChecked>我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！綠色和平尊重並保障您的個人資料，您隨時可取消訂閱，請參考 私隱政策。</Checkbox>
              </div>
            </Col>
          </Row>

          <Row className="show-grid">
        <Col xs={24}>
          <div href="#" className="custom-button custom-button-active" style={{marginTop: '30px'}} onClick={()=>alert('提交表格')}>提交聯署</div>
        </Col>
      </Row>
        </Grid>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    theme: theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
