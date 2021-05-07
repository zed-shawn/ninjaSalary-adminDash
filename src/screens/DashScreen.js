import React, { useState, useEffect, useCallback } from "react";
import nsLogo from "../assets/nsLogo.png";
import "./DashScreen.css";

export default function DashScreen() {
  const adminName = "Joy Kumar Saha";
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
      <body className="Body"></body>
      <footer className="Footer"></footer>
    </div>
  );
}
