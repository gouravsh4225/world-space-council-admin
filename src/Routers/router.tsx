import Login from "../Pages/PublicPages/Login/Login";
import { Register } from "../Pages/PublicPages/Register/Register";
import { ForgotPassword } from "../Pages/PublicPages/ForgotPassword/ForgotPassword";
import { EmailVerification } from "../Pages/PublicPages/EmailVerification/EmailVerification";
import { Dashboard } from "../Pages/PrivatePages/Dashboard/Dashboard";
import { UsersList } from "../Pages/PrivatePages/UserList/UsersList";
import WithDashboard from "../Hoc/Layout/WithDashboard/WithDashboard";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

export type RouterMenuType = {
  path: string;
  component: ReactNode | ReactElement;
};

const RouterList: RouterMenuType[] = [
  {
    path: "",
    component: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword />,
  },
  {
    path: "/email-verify",
    component: <EmailVerification />,
  },
  {
    path: "/dashboard",
    component: (
      <WithDashboard pageTitle="Dashboard">
        <Dashboard></Dashboard>
      </WithDashboard>
    ),
  },
  {
    path: "/users",
    component: (
      <WithDashboard pageTitle="Users">
        <UsersList></UsersList>
      </WithDashboard>
    ),
  },
];

export { RouterList };
