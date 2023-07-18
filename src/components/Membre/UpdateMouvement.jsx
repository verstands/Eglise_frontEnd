import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";

const UpdateMouvement = () => {
    return (
        <div>
            <div class="wrapper">
                <NavBar />
                <div class="main">
                    <NavOt />
                    <main className="content">
                        <div className="container-fluid p-0">
                            <h1 className="h3 mb-3"><strong>Modifier un mouvement</strong> </h1>
                            <div class="card">
                                <div class="card-body">

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UpdateMouvement;