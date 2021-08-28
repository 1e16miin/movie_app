import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromDashboard: true
                }
            }}>About</Link>
        </div>
    );
}

export default Navigation;