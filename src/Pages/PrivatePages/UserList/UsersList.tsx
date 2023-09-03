import { useEffect, useState } from "react";
import { DashboardGetUsersList } from "../../../API/DashboardPageApi/DashboardPageApi";
import { TableColumnsType, UserListTable } from "./UserListTable";

const UsersList = () => {
  const [userLists, setUserLists] = useState<any[]>([]);
  const UserListTableColumns: TableColumnsType[] = [
    {
      label: "First Name",
      id: "firstName",
    },
    {
      label: "Last Name",
      id: "lastName",
    },
    {
      label: "Email Address",
      id: "emailAddress",
    },
    {
      label: "College ID",
      id: "collegeId",
    },
    {
      label: "Mobile Number",
      id: "phoneNumber",
    },
  ];

  useEffect(() => {
    console.log("hey");
    DashboardGetUsersList()
      .then((response: any) => {
        const { data, status } = response;
        if (status === 200) {
          setUserLists(data.user_data);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <UserListTable data={userLists} columns={UserListTableColumns} />
    </div>
  );
};

export { UsersList };
