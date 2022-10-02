import React from 'react';
import { useEffect, useState } from 'react';

function Data() {
    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://127.0.0.1:5000/data'
    ,{
      headers : { 
        'run' : 'Run',
        'bus_id' : 'Bus',
        'op_id' : 'Operator ID',
        's_time' : 'Time Due',
        's_hws' : 'Scheduled Intervals (headway)',
        'p_time' : 'Predicted Time',
        'p_hw' : 'Predicted Intervals (headway)',
        'r_act' : 'Recommended Holding',
        'r_time' : 'Recommended Time',
        'r_hw' : 'Recommended Intervals (min)',
        'a_act' : 'Actual Holding (min)',
        'a_time' : 'Actual Time',
        'a_hw' : 'Actual Intervals (min)'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default Data;