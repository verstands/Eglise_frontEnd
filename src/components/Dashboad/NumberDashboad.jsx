import React from "react";
import { useSelector } from "react-redux";

const NumberDashboad = () => {
    const membrestats = useSelector((state) => state.statistiqueReducer);
    const countMembre = membrestats && membrestats.countMembre && membrestats.countMembre.total;
    const materiel = membrestats && membrestats.materiel && membrestats.materiel.total;
    const nouveau = membrestats && membrestats.nouveau && membrestats.nouveau.total;
   
    return (
        <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Membre</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="truck"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">
                                    {
                                        countMembre
                                    }
                                </h1>
                                <div className="mb-0">
                                    <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Nouveau ne(e)</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="users"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">{nouveau}</h1>
                                <div className="mb-0">
                                    <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Materiel</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="dollar-sign"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">{materiel}</h1>
                                <div className="mb-0">
                                    <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Orders</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">64</h1>
                                <div className="mb-0">
                                    <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumberDashboad;