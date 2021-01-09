import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Schema } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, SelectPicker, Checkbox} from "rsuite";
import { Grid, Row, Col } from "rsuite";
import ProgressBar from "apps/petition/components/progress";

const testData = [
  { bgcolor: "#65CC02", completed: 123000, target: 150000}
];

let RegistrationForm = ({ togglePanel, toggleTheme, setForm, submitForm }) => {
  const refForm = useRef();
  const { StringType, NumberType } = Schema.Types;
  const model = Schema.Model({
    Email: StringType()
      .isEmail('請填上有效電郵地址')
      .isRequired('請填寫資料'),
    LastName: StringType().isRequired('請填寫資料'),
    FirstName: StringType().isRequired('請填寫資料'),
    MobileCountryCode: StringType().isRequired('請填寫資料'),
    MobilePhone: NumberType()
      .isInteger('請輸入有效格式')
      .isRequired('請填寫資料')
      .addRule(value => {
        return value.toString().length === 8;
      }, '請輸入8位數字'),
    Birthdate: StringType().isRequired('請填寫資料'),
      promotion: null
  });

  const TextField = (props) =>{
    const { name, label, accepter, handleOnChange, ...rest } = props;
    return (
      <FormGroup>
        <ControlLabel>{label} </ControlLabel>
        <FormControl name={name} accepter={accepter} {...rest}/>
      </FormGroup>
    );
  }

  const TextFieldOnly = (props) =>{
    const { name, accepter, handleOnChange, ...rest } = props;
    return (
      <FormGroup>
        <FormControl name={name} accepter={accepter} {...rest}/>
      </FormGroup>
    );
  }

  class CustomField extends React.PureComponent {
    render() {
      const { name, message, label, accepter, error, ...props } = this.props;
      return (
        <FormGroup className={error ? 'has-error' : ''}>
          <FormControl
            name={name}
            accepter={accepter}
            errorMessage={error}
            {...props}
          />
        </FormGroup>
      );
    }
  }

  const closeAll = () =>{
    togglePanel(false)
    toggleTheme(false)
  }

  const handleSubmit = (isValid) =>{
    console.log('isValid--', isValid)
    console.log('refForm--', refForm.current.state)
    if(isValid){
      const {formValue} = refForm.current.state
      submitForm(formValue)
    }
  }

  const handleOnChange = (v) =>{
    setForm(v)
  }

  return (
    <div className="custom-gp-form">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24}>
          <div className="form-header">守護香港未來</div>
          <div className="form-description">我們需要大家的力量，一同發聲，促請政府優先發展棕地，放棄不負責任的「明日大嶼」填海計劃</div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={24}>
          {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} target={item.target}/>
          ))}
          <div className="sp-line"></div>
          </Col>
        </Row>
      </Grid>
      <div className="form-close" onClick={()=>closeAll()}><FontAwesomeIcon icon={['fas', 'times-circle']} size="lg" color="lime"/></div>
      <Form model={model} ref={refForm} 
        formDefaultValue={{
          Email: 'mail@mail.com',
          LastName: '陳',
          FirstName: '大文',
          MobilePhone: '55666688',
          MobileCountryCode: '852',
          Birthdate: '2000'
        }} 
        onSubmit={(d)=>handleSubmit(d)} onChange={(v)=>handleOnChange(v)}>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <TextField name="Email" label="電郵地址 Email Address" autoComplete="off"/>
              </FormGroup>
            </Col>
          </Row>

            <Row className="show-grid">
            <Col xs={12}>
              <FormGroup>
                <TextField name="LastName" label="姓氏 Last Name" autoComplete="off"/>
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <TextField name="FirstName" label="名字 First Name" autoComplete="off"/>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <ControlLabel>手提號碼 Phone Number</ControlLabel>
                <Col xs={8} style={{paddingLeft: 0}}>
                <CustomField
                  name="MobileCountryCode"
                  searchable={false}
                  cleanable={false}
                  placeholder="請選擇"
                  accepter={SelectPicker}
                  data={[{
                          label: "+852",
                          value: "852",
                        },
                        {
                          label: "+853",
                          value: "853"
                        },
                  ]}
                  />
                </Col>
                <Col xs={16} style={{paddingRight: 0}}>
                <FormGroup>
                  <TextFieldOnly type="number" name="MobilePhone" label="手提號碼 Phone Number" autoComplete="off"/>
                </FormGroup>
                </Col>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={24}>
              <FormGroup>
                <ControlLabel>出生年份 Year Of Birth</ControlLabel>
                <CustomField
                  name="Birthdate"
                  searchable={false}
                  cleanable={false}
                  placeholder="請選擇"
                  accepter={SelectPicker}
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
              <Checkbox name="promotion" defaultChecked>我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！綠色和平尊重並保障您的個人資料，您隨時可取消訂閱，請參考 私隱政策。</Checkbox>
              </div>
            </Col>
          </Row>

          <Row className="show-grid">
        <Col xs={24}>
          <button type="submit" className="custom-button custom-button-active" style={{marginTop: '30px'}}>提交聯署</button>
        </Col>
      </Row>
        </Grid>
      </Form>
      <div className="copy-right">
        <span><a href="https://www.greenpeace.org/hk" target="_blank">私隱政策與個人資料收集聲明</a></span>
        <span>© GREENPEACE 2021</span>
      </div>
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
    toggleTheme: (bol) => {dispatch({ type: themeActions.TOGGLE_FORM, bol })},
    togglePanel: (bol) => {dispatch({ type: themeActions.TOGGLE_PANEL, bol })},
    setForm: (value) => {dispatch({ type: themeActions.SET_FORM_VALUE, value })},
    submitForm: (form) => {dispatch({ type: themeActions.SUBMIT_FORM, form })},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
