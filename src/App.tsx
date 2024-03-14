// import { useState } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import "@patternfly/react-core/dist/styles/base.css";
import { AppLayout } from "./appLayout/AppLayout";
import { AppRoutes } from "./route";

function App() {
 

  return (
    <Router>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
  );
}

export default App;
