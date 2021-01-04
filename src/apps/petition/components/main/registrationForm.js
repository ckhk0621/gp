import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, errors, ButtonToolbar, Button } from 'rsuite';

let RegistrationForm = ({toggleTheme}) => {
  const onSubmit = data => console.log(data);
  return (
    <div className="custom-form">
      <div className="form-close" onClick={()=>toggleTheme(false)}><FontAwesomeIcon icon={['fas', 'times-circle']} size="lg"/></div>
      <Form>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl name="name" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name="email" type="email" />
          <HelpBlock tooltip>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Textarea</ControlLabel>
          <FormControl rows={5} name="textarea" componentClass="textarea" />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
}

const mapStateToProps = ({ swiper, theme }) => {
  return {
    theme: theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);