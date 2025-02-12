import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HfhfhgghList } from "./hfhfhggh/HfhfhgghList";
import { HfhfhgghCreate } from "./hfhfhggh/HfhfhgghCreate";
import { HfhfhgghEdit } from "./hfhfhggh/HfhfhgghEdit";
import { HfhfhgghShow } from "./hfhfhggh/HfhfhgghShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"gkgkgk"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Hfhfhggh"
          list={HfhfhgghList}
          edit={HfhfhgghEdit}
          create={HfhfhgghCreate}
          show={HfhfhgghShow}
        />
      </Admin>
    </div>
  );
};

export default App;
