import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserIcon from "../../../assets/Images/User.svg";
import PasswordIcon from "../../../assets/Images/Password.svg";
import "./_Login.scss";
import { LoginAPI } from "../../../API/LoginPageApi/LoginPageApi";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SpinnerLoader } from "../../../Components/Spinner/Spinner";

const Login = () => {
  const routerNavigate = useNavigate();
  const [loginFormState, setLoginFormState] = useState({
    userNameValue: "",
    passwordValue: "",
    errors: "",
    isLoading: false,
  });
  const { setItem } = useLocalStorage();

  const onLoginFormSubmit = (e: any) => {
    if (loginFormState.errors) {
      setLoginFormState({
        ...loginFormState,
        errors: "",
      });
    }
    e.preventDefault();
    const { userNameValue, passwordValue } = loginFormState;
    if (userNameValue && passwordValue) {
      setLoginFormState({
        ...loginFormState,
        isLoading: true,
      });
      LoginAPI({
        userName: userNameValue,
        password: passwordValue,
      })
        .then((res: any) => {
          setLoginFormState({
            ...loginFormState,
            isLoading: false,
          });
          const { data, status } = res;
          console.log({ data, status });
          if (!data.error && status === 200) {
            console.log(res, "res==>");
            setItem("userLoginToken", data.access_token);
            setItem("userLoginDetails", data.user_data);
            routerNavigate("/users");
          }
          if (status === 400 && data.error) {
            if (data.error) {
              let errorMessage: string = "";
              if (Array.isArray(data.error)) {
                data.error.map((errorItem: any) => {
                  if (errorItem.message) {
                    errorMessage = errorMessage.length
                      ? `${errorMessage},${errorItem.message}`
                      : `${errorItem.message}`;
                  }
                });
                setLoginFormState({
                  ...loginFormState,
                  errors: errorMessage,
                  isLoading: false,
                });
                return;
              }
              if (Object.keys(data.error).length) {
                for (const key in data.error) {
                  if (data.error[key]) {
                    errorMessage = errorMessage.length
                      ? `${errorMessage},${data.error[key]}`
                      : `${data.error[key]}`;
                  }
                }
                setLoginFormState({
                  ...loginFormState,
                  errors: errorMessage,
                });
                return;
              }
            }
          }
        })
        .catch((error: any) => {
          console.log(error, "errror");
          setLoginFormState({
            ...loginFormState,
            isLoading: false,
          });
        });
    } else {
      setLoginFormState({
        ...loginFormState,
        errors: "Please enter username and password",
        isLoading: false,
      });
    }
  };

  const onChangePasswordHanlder = (e: any) => {
    const { value } = e.target;
    setLoginFormState((formState) => {
      return {
        ...formState,
        passwordValue: value,
      };
    });
  };

  const onChangeUserNameHanlder = (e: any) => {
    const { value } = e.target;
    setLoginFormState((formState) => {
      return {
        ...formState,
        userNameValue: value,
      };
    });
  };

  const { userNameValue, passwordValue, errors, isLoading } = loginFormState;
  return (
    <div className="main-body light-mode ltr page-style1 page-style2 error-page side-shadow">
      <div className="page">
        <div className="d-md-flex">
          {/* <div className="w-40 bg-style h-100vh page-style">
            <div className="page-content">
              <div className="page-single-content">
                <img
                  src="../assets/images/brand/logo1.png"
                  alt="img"
                  className="header-brand-img mb-5"
                />
                <div className="card-body text-white py-5 px-8 text-center">
                  <img
                    src="../assets/images/png/3.png"
                    alt="img"
                    className="w-100 mx-auto text-center"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-60 page-content m-auto">
            <div className="page-single-content">
              <div className="card-body p-6">
                <div className="row">
                  <div className="col-md-8 mx-auto d-block">
                    <div className="text-center">
                      <h1 className="mb-2">Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                    </div>
                    <form onSubmit={onLoginFormSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-addon">
                          <img
                            src={UserIcon}
                            className="svg-icon"
                            alt="user_icon"
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={userNameValue}
                          onChange={onChangeUserNameHanlder}
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <img
                            src={PasswordIcon}
                            className="svg-icon"
                            alt="Password"
                          />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={passwordValue}
                          onChange={onChangePasswordHanlder}
                        />
                      </div>
                      <div className="row">
                        {/* <div className="col-12">
                          <Link
                            to="/forgot-password"
                            className="btn btn-link box-shadow-0 px-0"
                          >
                            Forgot password?
                          </Link>
                        </div> */}
                        {errors ? (
                          <div className="w-full text-center text-danger p-1 m-auto">
                            <p className="w-full">{errors}</p>
                          </div>
                        ) : null}

                        <div className="col-12">
                          <button
                            className="btn btn-primary  d-flex align-items-center justify-content-center btn-block"
                            type="submit"
                            onClick={onLoginFormSubmit}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <SpinnerLoader />
                            ) : (
                              <>
                                <span className="ml-10">Login</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* <div className="pt-4">
                      <div className="font-weight-normal fs-16">
                        You Don't have an account{" "}
                        <Link
                          to="/register"
                          className="btn-link font-weight-normal"
                        >
                          Register Here
                        </Link>
                      </div>
                    </div> */}
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

export default Login;
