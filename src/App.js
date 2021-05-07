import React, { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store";

import DashScreen from "./screens/DashScreen";

function App() {
  return <DashScreen />;
}

export default App;
