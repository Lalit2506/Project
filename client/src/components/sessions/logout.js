import React, {useEffect, useContext} from "react";
import Axios from "axios";
import {Redirect} from "react-router-dom";
import NotificationContext from "../notification_context";

function Logout() {

    const {setNotification} = useContext(NotificationContext);

    useEffect(() => {
        Axios.post("/api/logout")
    .then(() => setNotification(notification => {
      return {
        ...notification,
        status: "success",
        message: "Logged out"
      };
    }))
    .catch(() => setNotification(notification => {
      return {
        ...notification,
        status: "danger",
        message: "you are not going anywhere"
      };
    }));
    }, []);

    return <Redirect to="/" />
}

export default Logout;