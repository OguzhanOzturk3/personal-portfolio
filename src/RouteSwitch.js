
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './profile.css';

import Profile from "./profile"


const RouteSwitch = () => {

    
    return (
        <BrowserRouter basename="/personal-portfolio" >
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
