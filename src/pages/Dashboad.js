import React from "react";
import NavBar from "../components/NavBar";
import NavOt from "../components/NavOt";
import NumberDashboad from "../components/Dashboad/NumberDashboad";
import GraphiqueLineDashboad from "../components/Dashboad/GraphiqueLineDashboad";
import PaysDashboad from "../components/Dashboad/PaysDashboad";

const Dashboad = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Dashboard</strong> </h1>
                        <div className="row">
                            <NumberDashboad />
                            <GraphiqueLineDashboad />
                        </div>
                        <div class="row">
                            <PaysDashboad />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboad;