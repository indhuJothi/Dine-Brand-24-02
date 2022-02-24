import * as React from "react";
// import { useState } from "react";
// import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
// import { ThemeProvider } from "@material-ui/styles";
// import { createMuiTheme } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import "./homepage.css";
import { Header } from "antd/lib/layout/layout";

class Homepage extends React.Component<{}, {}> {
  // constructor(props:any){
  //     super(props)
  // }
  render() {
    return (
      <div className="container">
          <Header className="Header">Dine Brand</Header>
        <div>
          <form className="form">
            <label>Name</label>
            <input></input>
            <label>Mobile</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <div>
            <label>Yes</label>
            <input type="radio"></input>
            <label>No</label>
            <input type="radio"></input>
            </div>
           
          </form>
        </div>
      </div>
    );
  }
}

export default Homepage;
