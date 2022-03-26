import React from "react";
import MainCenterSection from "../main-center-section/MainCenterSection";
import MainLeftSection from "../main-left-section/MainLeftSection";
import MainRightSection from "../main-right-section/MainRightSection";

const MainSection = () => {
    return (
        <div className="main-section">
            <MainLeftSection />
            <MainCenterSection />
            <MainRightSection />
        </div>
    )
}

export default MainSection