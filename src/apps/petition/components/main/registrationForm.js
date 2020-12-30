import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

let RegistrationForm = ({toggleTheme}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
      <div className="form-close" onClick={()=>toggleTheme(false)}><FontAwesomeIcon icon={['fas', 'times-circle']} size="lg"/></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        TODO:<br/>
        <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
        {/* <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />

        <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
        <input name="Developer" type="radio" value="No" ref={register({ required: true })}/> */}

        <input type="submit" />
      </form>
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