import React from 'react';
import { useEffect, useState } from 'react';
import DATA from './data/data.json';

export function TableData(props) {
    const [data,setData]=useState([]);
    //const dataUrl = 'https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=10&orderby=prddtm_np';
    const dataUrl = props.url;
    const fetchHeaders = props.headers;
//   const getData=()=>{
    useEffect(() => {
        console.log(dataUrl);
        fetch(dataUrl //, {headers : fetchHeaders}
        // ,{
        //   headers : { 
        //     'rid' : 'Run',
        //     'vid' : 'Bus',
        //     'oid' : 'Operator ID',
        //     'schdtm_np' : 'Schd. Time',
        //     'schdtm_red': 'Schd. Time',
        //     'schdtm_brown': 'Schd. Time',
        //     'schdtm_blue': 'Schd. Time',
        //     'prdatm_np': 'Prd. Arrival',
        //     'prddtm_np': 'Prd. Departure',
        //     'prdtm_red': 'Prd. Arrival',
        //     'prdtm_brown': 'Prd. Arrival',
        //     'prdtm_blue': 'Prd. Arrival',
        //     'd_np': 'Schd. Deviation',
        //     'd_red': 'Schd. Deviation',
        //     'd_brown': 'Schd. Deviation',
        //     'd_blue': 'Schd. Deviation',
        //     'sh_np' : 'Headway',
        //     'h_np' : 'Prd. Headway',
        //     'h_red': 'Prd. Headway',
        //     'h_brown' : 'Prd. Headway',
        //     'h_blue': 'Prd. Headway',
        //     'fh_np' : 'Prd. Next Headway',
        //     'fh_red' : 'Prd. Next Headway',
        //     'fh_brown' : 'Prd. Next Headway',
        //     'fh_blue' : 'Prd. Next Headway',
        //     'rec_np' : 'Rec. Adjustment',
        //     'rec_red' : 'Rec. Adjustment',
        //     'rec_brown' : 'Rec. Adjustment',
        //     'rec_blue' : 'Rec. Adjustment',
        //     'ebus': 'E-bus',
        //     'sh_np': 'Schd. Headway',
        //     'h_msg_red': 'Front Status',
        //     'h_msg_brown': 'Front Status',
        //     'h_msg_blue': 'Front Status',
        //     'fh_msg_red': 'Back Status',
        //     'fh_msg_brown': 'Back Status',
        //     'fh_msg_blue': 'Back Status',
        //     'conf_np': 'Confirmed',
        //     'conf_brown': 'Confirmed',
        //     'conf_red': 'Confirmed',
        //     'conf_blue': 'Confirmed',
        //     'pattern': 'Destination',
        //     'recovery': 'Recovery',
        //     'relieved': 'In Relief',
        //     'on': 'On-schedule'
        //    }
        // }
        )
        .then((response) => {
            console.log(response);
            if(response.ok) {
                console.log(response);
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            console.log(data);
            setData(data);
        });
    }, [data, dataUrl]);
//   useEffect(() => {
//     DATA.map(bus => (
//       bus.rid === rid
//       ? setData(bus)
//       : null
//     ))
//   }, []);  
//   useEffect(() => {
//     // Using fetch to fetch the api from 
//     // flask server it will be redirected to proxy
//     fetch(dataUrl)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, [data, dataUrl]);
//   useEffect(()=>{
//     getData()
//   },[])
console.log(data);
  return (
    data
    // <div className="App">
    //  {
    //    data && data.length>0 && data.map((item)=><p>{item.about}</p>)
    //  }
    // </div>
  );
}

export default TableData;