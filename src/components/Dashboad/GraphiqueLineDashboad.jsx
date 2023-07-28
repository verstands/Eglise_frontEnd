import React from "react";
import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

const GraphiqueLineDashboad = () => {
    const membrestat = useSelector((state) => state.statistiqueReducer);
    const data = {
        labels: Array.isArray(membrestat.data) && membrestat.data.map(item => item.month),
        datasets: [
            {
                label: 'Tout les membres de l\'année',
                data:Array.isArray(membrestat.data) && membrestat.data.map(item => item.total),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="col-xl-6 col-xxl-7">
            <div className="card flex-fill w-100">
                <div className="card-header">

                    <h5 className="card-title mb-0">Les membres</h5>
                </div>
                <div className="card-body py-3">
                    <div className="chart chart-sm">
                  
                <Bar data={data} />
       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphiqueLineDashboad;