import React from "react";

const NumberDashboad = () => {
    return (
        <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Sales</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="truck"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">2.382</h1>
                                <div className="mb-0">
                                    <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                                    <span className="text-muted">Since last week</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Visitors</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="users"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">14.212</h1>
                                <div className="mb-0">
                                    <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                    <span className="text-muted">Since last week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-0">
                                        <h5 className="card-title">Earnings</h5>
                                    </div>

                                    <div className="col-auto">
                                        <div className="stat text-primary">
                                            <i className="align-middle" data-feather="dollar-sign"></i>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-1 mb-3">$21.300</h1>
                                <div className="mb-0">
                                    <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                    <span className="text-muted">Since last week</span>
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
                                    <span className="text-muted">Since last week</span>
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