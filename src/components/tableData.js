import React from 'react';
import { useEffect, useState } from 'react';
import DATA from './data/data.json';

function Data() {
    const [data,setData]=useState([]);
    const dataUrl = 'http://127.0.0.1:5000/bus/all';
  const getData=()=>{
    fetch('http://127.0.0.1:5000/bus/all'
    ,{
      headers : { 
        'rid' : 'Run',
        'vid' : 'Bus',
        'oid' : 'Operator ID',
        'schdtm_np' : 'Schd. Time',
        'schdtm_red': 'Schd. Time',
        'schdtm_brown': 'Schd. Time',
        'schdtm_blue': 'Schd. Time',
        'prdatm_np': 'Prd. Arrival',
        'prddtm_np': 'Prd. Departure',
        'prdtm_red': 'Prd. Arrival',
        'prdtm_brown': 'Prd. Arrival',
        'prdtm_blue': 'Prd. Arrival',
        'd_np': 'Schd. Deviation',
        'd_red': 'Schd. Deviation',
        'd_brown': 'Schd. Deviation',
        'd_blue': 'Schd. Deviation',
        'sh_np' : 'Headway',
        'h_np' : 'Prd. Headway',
        'h_red': 'Prd. Headway',
        'h_brown' : 'Prd. Headway',
        'h_blue': 'Prd. Headway',
        'fh_np' : 'Prd. Next Headway',
        'fh_red' : 'Prd. Next Headway',
        'fh_brown' : 'Prd. Next Headway',
        'fh_blue' : 'Prd. Next Headway',
        'rec_np' : 'Rec. Adjustment',
        'rec_red' : 'Rec. Adjustment',
        'rec_brown' : 'Rec. Adjustment',
        'rec_blue' : 'Rec. Adjustment',
        'ebus': 'E-bus',
        'sh_np': 'Schd. Headway',
        'h_msg_red': 'Front Status',
        'h_msg_brown': 'Front Status',
        'h_msg_blue': 'Front Status',
        'fh_msg_red': 'Back Status',
        'fh_msg_brown': 'Back Status',
        'fh_msg_blue': 'Back Status',
        'confirm_np': 'Confirmed',
        'confirm_brown': 'Confirmed',
        'confirm_blue': 'Confirmed',
        'pattern': 'Destination',
        'recovery': 'Recovery',
        'relieved': 'In Relief',
        'on': 'On-schedule'
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
  useEffect(() => {
    DATA.map(bus => (
      bus.run == run
      ? setData=(bus)
      : null
    ))
  }, []);  
//   useEffect(() => {
//     // Using fetch to fetch the api from 
//     // flask server it will be redirected to proxy
//     fetch(dataUrl)
//         .then(response => {
//             response.json()
//         })
// }, [data, dataUrl]);
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