import React from 'react'
import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './pie.scss'



ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);




export const Pie = () => {

    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
              '#975AB6',
              '#509AD8',
              '#0D1352'
            ]
        },
      ],
      
    });
      useEffect(()=> {
        const fetchData = () =>  {
          fetch('http://127.0.0.1:5000/employee').then((data) => {
            const res = data.json();
            
            return res
          }).then((res) => {
            console.log("resss", res)
            const label = [];
            const data = [];
            for(var i of res) {
                // label.push(i.gender);
                data.push(i.salary)
                
            }
            setData(
              {
                datasets: [{
                    data:data,
                    backgroundColor:[
                      '#975AB6',
                      '#509AD8',
                      '#0D1352'
                    ]
                },
              ],
              labels:label, 
            }
            )
    
          }).catch(e => {
            console.log("error", e)
          }) 
        }
      fetchData();
      }, [])


  return (
    <div className="pie"  >
        <div className="top">
        <Doughnut data={data}/>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Pie;