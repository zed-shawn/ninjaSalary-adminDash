import React from "react";
import nsLogo from "../assets/nsLogo.png";
import Table from "../components/Table";
import ModalScreen from "../components/Modal";

import "./DashScreen.css";
import { useSelector } from "react-redux";

export default function DashScreen() {
  const adminName = useSelector((state) => state.data.creds.adminName);

  return (
    <div className="Root">
      <ModalScreen />
      <header className="Header">
        <a href="https://ninjasalary.com/">
          <img src={nsLogo} className="Logo" alt="logo" />
        </a>
        <p className="Header-title">DASHBOARD </p>
        <div className="Header-right">
          <p className="Intro-text">
            Welcome,
            <br /> {adminName}
          </p>
          <a className="Logout-link" href="https://app.ninjasalary.com/">
            Logout
          </a>
        </div>
      </header>
      <div className="Body">
        <Table />
      </div>
      <footer className="Footer"></footer>
    </div>
  );
}
