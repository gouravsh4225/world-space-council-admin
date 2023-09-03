import { useState } from "react";
import UserIcon from "../../../assets/Images/User.svg";
import PasswordIcon from "../../../assets/Images/Password.svg";
import EmailIcon from "../../../assets/Images/email-icon.svg";
import { Link } from "react-router-dom";
import "./_Register.scss";

export const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    emailAddress: "",
    password: "",
    isTermAndPolicyAccept: false,
  });

  const onChangeUserHandler = (e: any) => {
    const { value } = e.target;
    setRegisterForm({
      ...registerForm,
      userName: value,
    });
  };
  const onChangeEmailAddressHandler = (e: any) => {
    const { value } = e.target;
    setRegisterForm({
      ...registerForm,
      emailAddress: value,
    });
  };
  const onChangePasswordHandler = (e: any) => {
    const { value } = e.target;
    setRegisterForm({
      ...registerForm,
      password: value,
    });
  };
  const onChangeIsTermHandler = (e: any) => {
    const { value } = e.target;
    setRegisterForm({
      ...registerForm,
      password: value,
    });
  };

  const onSubmitRegisterForm = (e: any) => {
    e.preventDefault();
    console.log(registerForm);
  };

  return (
    <div className="main-body light-mode ltr page-style1 page-style2 error-page">
      <div className="page">
        <div className="d-md-flex">
          <div className="w-40 bg-style h-100vh page-style">
            <div className="page-content">
              <div className="page-single-content">
                <img
                  src="./register_files/logo1.png"
                  alt="img"
                  className="header-brand-img mb-5"
                />
                <div className="card-body text-white py-5 px-8 text-center">
                  {" "}
                  <img
                    src="./register_files/2.png"
                    alt="img"
                    className="w-100 mx-auto text-center"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 page-content">
            <div className="page-single-content">
              <div className="card-body p-6">
                <div className="row">
                  <div className="col-md-8 mx-auto d-block">
                    <h1 className="mb-2">Register</h1>
                    <p className="text-muted">Create New Account</p>
                    <form onSubmit={onSubmitRegisterForm}>
                      <div className="input-group mb-3">
                        <span className="input-group-addon">
                          <img src={UserIcon} alt="usernameIcon" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={registerForm.userName}
                          aria-label="username"
                          onChange={onChangeUserHandler}
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <img src={EmailIcon} alt="email icon" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                          value={registerForm.emailAddress}
                          aria-label="email"
                          onChange={onChangeEmailAddressHandler}
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <img src={PasswordIcon} alt="password icon" />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={registerForm.password}
                          aria-label="password"
                          onChange={onChangePasswordHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            aria-label="term&condition"
                            checked={registerForm.isTermAndPolicyAccept}
                            onChange={onChangeIsTermHandler}
                          />
                          <span className="custom-control-label">
                            Agree the{" "}
                            <Link
                              to="https://spruko.com/demo/dashtic/Dashtic/Html/terms.html"
                              className="btn-link"
                            >
                              terms and policy
                            </Link>
                          </span>
                        </label>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            className="btn btn-lg btn-primary btn-block px-4"
                            onClick={onSubmitRegisterForm}
                          >
                            <i className="fa fa-arrow-right"></i> Create a new
                            account
                          </button>
                        </div>
                      </div>
                      <div className="pt-4">
                        <div className="font-weight-normal fs-16">
                          You Already have an account{" "}
                          <Link
                            to="/login"
                            className="btn-link font-weight-normal"
                          >
                            Login Here
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
