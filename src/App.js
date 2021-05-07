import React, { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store";

import * as DataActions from "./store/dataHandler";

import DashScreen from "./screens/DashScreen";

function App() {
  const dispatch = useDispatch();

  const dispatchLoadData = useCallback(() => {
    dispatch(DataActions.loadUser());
  }, [dispatch]);

  useEffect(() => {
    dispatchLoadData();
  });
  return <DashScreen />;
}

function AppWrapper() {
  // Wrapper is used as redux dispatch component is present in App body & hence not wrapped in <Provider>
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
