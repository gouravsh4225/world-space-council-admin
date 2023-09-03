import Footer from "../../../Components/Footer/Footer";

const PackageDetails = () => {
  return (
    <div className="main-body app sidebar-mini light-mode ltr">
      <div className="page">
        <div className="page-main">
          {/* <!-- app-content start-->  */}
          <div
            className="app-content main-content"
            style={{ marginLeft: "100px", marginRight: "100px" }}
            //   style="margin-left: 100px; margin-right: 100px;"
          >
            <div className="side-app">
              <div className="container main-container">
                {/* <!--Page header-->  */}
                <div className="page-header">
                  <div className="">
                    <h4 className="page-title">Welcome To Growmax.</h4>
                    <div className="page-rightheader ms-auto d-lg-flex d-none">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <span className="breadcrumb-icon">
                            {" "}
                            Choose Your Package To Continue Growmax Journey
                          </span>
                        </li>
                      </ol>
                    </div>
                    <br />
                  </div>
                </div>
                {/* <!--End Page header--> <!-- Row -->  */}
                <div className="row text-center no-gutters mb-7">
                  <div className="col-lg-4">
                    <div className="card plan-card shadow-none">
                      <div className="card-block">
                        <div className="pt-4 pb-4">
                          <h1>
                            <i className="fa fa-plane plan-icon bg-primary"></i>
                          </h1>
                          <h6 className="text-uppercase font-weight-semibold text-primary">
                            Starter Pack
                          </h6>
                        </div>
                        <div>
                          <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">
                            $19{" "}
                            <span className="text-muted m-l-10">
                              <sup>Per Month</sup>
                            </span>
                          </h1>
                          <div className="plan-div-border"></div>
                        </div>
                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                          <p>
                            <strong>2 </strong> FreeDomain Name
                          </p>
                          <p>
                            <strong>2</strong> One-Click Apps
                          </p>
                          <p>
                            <strong>24/7</strong> Support
                          </p>
                          <a
                            href="#!"
                            //    href="javascript:void(0)"
                            className="btn btn-lg btn-primary mt-4"
                          >
                            Sign Up Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card plan-card border active">
                      <div className="card-block">
                        <div className="pt-4 pb-4">
                          <h1>
                            <i className="fa fa-trophy plan-icon bg-info"></i>
                          </h1>
                          <h6 className="text-uppercase font-weight-semibold text-info">
                            Professional Pack
                          </h6>
                        </div>
                        <div>
                          <h1 className="plan-price padding-b-15 display-4 mb-0  font-weight-semibold">
                            $29{" "}
                            <span className="text-muted m-l-10">
                              <sup>Per Month</sup>
                            </span>
                          </h1>
                          <div className="plan-div-border"></div>
                        </div>
                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                          <p>
                            <strong>3 </strong> FreeDomain Name
                          </p>
                          <p>
                            <strong>5</strong> One-Click Apps
                          </p>
                          <p>
                            <strong>24/7</strong> Support
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-lg btn-info mt-4"
                          >
                            Sign Up Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card plan-card shadow-none">
                      <div className="card-block">
                        <div className="pt-4 pb-4">
                          <h1>
                            <i className="fa fa-umbrella plan-icon bg-secondary"></i>
                          </h1>
                          <h6 className="text-uppercase font-weight-semibold text-secondary">
                            Enterprise Pack
                          </h6>
                        </div>
                        <div>
                          <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">
                            $39{" "}
                            <span className="text-muted m-l-10">
                              <sup>Per Month</sup>
                            </span>
                          </h1>
                          <div className="plan-div-border"></div>
                        </div>
                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                          <p>
                            <strong>10 </strong> FreeDomain Name
                          </p>
                          <p>
                            <strong>10</strong> One-Click Apps
                          </p>
                          <p>
                            <strong>24/7</strong> Support
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-lg btn-secondary mt-4"
                          >
                            Sign Up Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Row -->  */}
              </div>
            </div>
          </div>
          {/* <!-- end app-content-->  */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PackageDetails;
