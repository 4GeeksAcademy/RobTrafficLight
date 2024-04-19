import React, { useState } from "react";

export const Traffic = () => {
    const [lightColor, setLightColor] = useState("red");

    return (
        <div className="m-auto bg-dark rounded-4 d-flex justify-content-between" style={{ width: "80px", height: "200px" }}>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <div onClick={() => setLightColor("red")} className={"light rounded-circle my-1" + (lightColor === "red" ? " bg-danger red-glow" : " bg-secondary" )} style={{ width: "50px", height: "50px" }}></div>
                <div onClick={() => setLightColor("yellow")} className={"light rounded-circle my-1" + (lightColor === "yellow" ? " bg-warning yellow-glow" : " bg-secondary" )} style={{ width: "50px", height: "50px" }}></div>
                <div onClick={() => setLightColor("green")} className={"light rounded-circle my-1" + (lightColor === "green" ? " bg-success green-glow" : " bg-secondary" )} style={{ width: "50px", height: "50px" }}></div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-dark">
                <div className={"light rounded-5 my-1" + (lightColor === "green" ? " bg-danger red-glow" : " bg-secondary" )} style={{ width: "50px", height: "50px" }}><i className="fas fa-person"></i></div>
                <div className={"light rounded-5 my-1" + (lightColor === "red" ? " bg-success green-glow" : " bg-secondary" )} style={{ width: "50px", height: "50px" }}><i className="fas fa-person-walking"></i></div>
            </div>

        </div>
    );
}
