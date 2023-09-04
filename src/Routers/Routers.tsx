import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterMenuType, RouterList } from "./router";

const WorldSpaceCouncilAppRouters = () => {
  return (
    <BrowserRouter basename="/world-space-council-admin/">
      <Routes>
        {RouterList.map((routerItem: RouterMenuType) => (
          <Route
            path={routerItem.path}
            element={routerItem.component}
            key={routerItem.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export { WorldSpaceCouncilAppRouters };
