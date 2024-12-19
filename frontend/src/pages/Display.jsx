import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const [mydata, setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:8000/students/studentdisplay";
    try {
      const response= await axios.get(api);
            setMydata(response.data);
      console.log(response.data);
    } catch (error) {
       console.log(error);
        alert(error.response.data);
    }  
  }

  useEffect(()=>{
    loadData();
  }, []);

 const ans= mydata.map((key)=>{
    return(
      <>
         <tr>
          <td> {key.empno} </td>
          <td> {key.empname} </td>
          <td> {key.designation} </td>
          <td> {key.salary} </td>
         </tr>
      </>
    )
 })


    return(
        <>
          <h1> Display Employee Records</h1>
          <table>
            <tr>
              <th> Employee Np.</th>
              <th> Employee name</th>
              <th> Designation </th>
              <th> Salary</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;