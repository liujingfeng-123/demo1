import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routers from "../router";
const App = () => {
  return (
    <div className="App">
      <Suspense fallback="loading">{useRoutes(routers)}</Suspense>
    </div>
  );
};
export default App;
