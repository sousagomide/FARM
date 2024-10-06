import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const Authenticated = (props) => {
    const { children } = props;
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if(!auth.isAuthenticated){
            navigate("/login", { replace: true , state: { from: location }});
        } else {
            setIsVerified(true);
        }
    }, [auth.isAuthenticated, location, navigate]);

    if(!isVerified){
        return null;   
    }

    return (
        <>
            {children}
        </>
    )
}
