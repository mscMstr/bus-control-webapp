import React from 'react';
import { useEffect, useState } from 'react';

function Data() {
    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://127.0.0.1:5000/data'
    ,{
      headers : { 
        'run' : 'Run',
        'run_relief' : 'Run Relief',
        'bus_id' : 'Bus',
        's_time' : 'Time Due',
        'p_time' : 'Expected Time',
        'p_hw' : 'Expected Intervals (min)',
        'r_act' : 'Recommended Action (min)',
        'r_time' : 'Recommended Time',
        'r_hw' : 'Recommended Intervals (min)',
        'a_act' : 'Executed Action (min)',
        'a_time' : 'Executed Time',
        'a_hw' : 'Executed Intervals (min)'
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