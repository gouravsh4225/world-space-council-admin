import { useState } from "react";
import EmailIcon from "../../../assets/Images/email-icon.svg";
import { useNavigate } from "react-router-dom";

export const EmailVerification = () => {
  const routerNavigate = useNavigate();
  const [emailVerificationToken, setEmailVerificationToken] = useState("");

  const onSubmitEmailVerificationForm = (e: any) => {
    e.preventDefault();
    console.log("hey submit", emailVerificationToken);
    routerNavigate("/dashboard");
  };

  const onHandleRequestAgainToken = (e: any) => {
    e.preventDefault();
    console.log("hey token send");
  };

  return (
    <div className="main-body light-mode ltr page-style1 error-page">
      <div className="page">
        <div className="page-single">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="card p-4 mb-0 mt-7 mt-md-2">
                  <div className="card-body">
                    <div className="text-center title-style mb-6">
                      <h1 className="mb-2">Email Verification</h1>
                      <hr />
                      <p className="text-muted">
                        Please Check Your Email To Get OTP
                      </p>
                    </div>
                    <form onSubmit={onSubmitEmailVerificationForm}>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <img src={EmailIcon} alt="email icon" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                          aria-label="otp"
                          onChange={(e) =>
                            setEmailVerificationToken(e.target.value)
                          }
                        />
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            className="btn btn-lg btn-primary btn-block px-4"
                            onClick={onSubmitEmailVerificationForm}
                          >
                            <i className="fa fa-arrow-right"></i> Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <div className="font-weight-normal fs-16">
                    <a
                      href="#!"
                      // href="javascript:void(0)"
                      className="btn-link font-weight-normal"
                      onClick={onHandleRequestAgainToken}
                    >
                      Send OTP Again
                    </a>
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
