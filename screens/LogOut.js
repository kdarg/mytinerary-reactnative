import React from "react";

import Home from "./Home";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";


const LogOut = (props) => {
  const deslogueame = async (e) => {
    await props.LogOutUser();
  };

  deslogueame();

  return <Home/>;
};

const mapDispatchToProps = {
    LogOutUser: userActions.LogOutUser,
};

export default connect(null, mapDispatchToProps)(LogOut);