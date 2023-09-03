import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterMenuType, RouterList } from "./router";

const WorldSpaceCouncilAppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouterList.map((routerItem: RouterMenuType) => (
          <Route
            path={routerItem.path}
            element={routerItem.component}
            key={routerItem.path}
          />
        ))}
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verify" element={<EmailVerification />} />
        <Route
          path="/dashboard"
          element={
            <WithDashboard>
              <Dashboard />
            </WithDashboard>
          }
        />
        <Route
          path="/users"
          element={
            <WithDashboard>
              <UsersList />
            </WithDashboard>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export { WorldSpaceCouncilAppRouters };
