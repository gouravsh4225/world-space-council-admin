// import React from "react";
import { ReactElement, ReactNode } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import SideBar from "../../../Components/SideBar/SideBar";

type WithDashboardType = {
  children: ReactNode | ReactElement;
  pageTitle?: string;
};

const WithDashboard = (props: WithDashboardType) => {
  const { children, pageTitle } = props;
  return (
    <div className="main-body app sidebar-mini light-mode ltr">
      <div className="page">
        <div className="page-main">
          {/* <!--app header--> */}
          <Header />
          {/* <!--/app header--> <
          !-- main-sidebar --> */}
          <SideBar />
          {/* <!-- main-sidebar --> */}

          <div className="app-content main-content">
            <div className="side-app">
              <div className="container-fluid main-container">
                {/* <!--Page header--> */}
                <div className="page-header">
                  <div className="page-leftheader">
                    <br />
                    <h4 className="page-title">{pageTitle}</h4>
                  </div>
                </div>
                {/* <!--End Page header--> <!--Row--> */}
                {children}
                {/* <!--End row--> */}
              </div>
            </div>
          </div>
          {/* <!-- end app-content--> */}
        </div>
        {/* <!--Footer--> */}
        <Footer />
        {/* <!-- End Footer--> */}
      </div>
    </div>
  );
};

export default WithDashboard;
