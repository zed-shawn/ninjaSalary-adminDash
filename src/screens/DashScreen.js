import React, { useState, useEffect, useCallback } from "react";
import nsLogo from "../assets/nsLogo.png";
import "./DashScreen.css";
import { useDispatch, useSelector } from "react-redux";

export default function DashScreen() {
  const adminName = useSelector((state) => state.data.creds.adminName);
  const transactions = useSelector((state) => state.data.transactions);
  console.log(transactions);

  return (
    <div className="Root">
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
      <div className="Body"></div>
      <footer className="Footer"></footer>
    </div>
  );
}
