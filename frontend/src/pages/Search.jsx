import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {message} from "antd";

const Search=()=>{
    const [empno, setEmpno]= useState("");
    const [mydata, setMydata]=useState([]);
   
    const handleSubmit=()=>{
        let api="http://localhost:8000/students/studentsearch";
        axios.post(api, {empno:empno}).then((res)=>{
            setMydata(res.data);
           
            if (res.data.length==0)
            {
                 message.error("No Record Found!!!");
            }
        })
    }


    const ans=mydata.map((key)=>{
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
          <h1> Search employee records</h1>
          Enter Employee  Number : <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
          <button onClick={handleSubmit}>Search </button>
           <br/> <br/>
           <hr/>
          <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Employee No.</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th> Salary</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        </>
    )
}

export default Search;