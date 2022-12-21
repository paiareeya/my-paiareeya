import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }
}

export default Layout;