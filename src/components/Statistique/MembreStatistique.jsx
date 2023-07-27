import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from "chart.js/auto";



const MembreStatistique = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    const DoughnutChart = () => {
        const data = {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: Array.from({length: 3}, () => `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.2)`),
              borderColor: Array.from({length: 3}, () => `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 1)`),
              borderWidth: 1,
            },
          ],
        };
      
        return (
          <div>
            <h2>Doughnut Chart</h2>
            <Doughnut data={data} />
          </div>
        );
      };
    return (
        <div className="row">
            <div className='col-md-6'>
                <Bar data={data} />
            </div>
            <div className='col-md-6'>
                <div style={{width : '50%', height : '50%'}}>
                <DoughnutChart />
                </div>
            </div>
        </div>
    )
}

export default MembreStatistique