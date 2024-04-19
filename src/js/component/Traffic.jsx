import React, { useState } from "react";

export const Traffic = () => {
    const [lightColor, setLightColor] = useState("red");

  

    return (
        <div className="m-auto d-flex justify-content-evenly align-items-center mt-5" style={{ height: "200px" }}>
            <div id="tfLight" className="d-flex bg-dark flex-column align-items-center justify-content-center h-100 rounded-3" style={{ width: "80px", height: "200px" }}>
                <div id="rLight" onClick={() => setLightColor("red")} className={"light rounded-circle my-1" + (lightColor === "red" ? " bg-danger red-glow" : " bg-secondary")} style={{ width: "50px", height: "50px" }}></div>
                <div id="yLight" onClick={() => setLightColor("yellow")} className={"light rounded-circle my-1" + (lightColor === "yellow" ? " bg-warning yellow-glow" : " bg-secondary")} style={{ width: "50px", height: "50px" }}></div>
                <div id="gLight" onClick={() => setLightColor("green")} className={"light rounded-circle my-1" + (lightColor === "green" ? " bg-success green-glow" : " bg-secondary")} style={{ width: "50px", height: "50px" }}></div>
            </div>

            <div id="psLight" className="d-flex flex-column align-items-center justify-content-center bg-dark rounded-3" style={{ width: "80px", height: "150px" }}>
                <div id="peaRLight" className={"light rounded-5 my-1" + (lightColor === "green" ? " bg-danger red-glow" : " bg-secondary")} style={{ width: "50px", height: "50px" }}>
                    <span className={" fs-2 d-flex justify-content-center align-items-center" + (lightColor === "green" ? " text-light" : "")} style={{ width: "100%", height: "100%" }}>
                        <i className="fas fa-person"></i>
                    </span>
                </div>
                <div id="peaGLight" className={"light rounded-5 my-1" + (lightColor === "red" ? " bg-success green-glow" : " bg-secondary") + (lightColor === "yellow" ? " " : " bg-secondary")} style={{ width: "50px", height: "50px" }}>
                    <span className={" fs-2 d-flex justify-content-center align-items-center" + (lightColor === "red" || lightColor === "red" ? " text-light" : "")} style={{ width: "100%", height: "100%" }}>
                        <i className="fas fa-person-walking"></i>
                    </span>
                </div>
            </div>

        </div>
    );
}



