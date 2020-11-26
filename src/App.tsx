import {Routes} from './routes/Routes'
import React from "react";
import PrimarySearchAppBar from './components/navigationbar/NavigationBar'

import {UserProvider} from "./shared/provider/UserProvider";

function App() {
  return (
      <UserProvider>
        <Routes>
          <PrimarySearchAppBar/>
        </Routes>
      </UserProvider>
  );
}

export default App;
