import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import edimage from "../images/edit.png";
import delimage from "../images/delete.jpeg";
import {useNavigate} from "react-router-dom"

const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/students/studentupdatedisplay";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, []);
 

const myrecDel=(id)=>{
  let api="http://localhost:8000/students/studentdatadelete";
  axios.post(api, {id:id}).then((res)=>{
    alert("Data deleted!!!");
    loadData();
  })
}

const myrecEdit=(id)=>{
 
  navigate(`/editdata/${id}`);
}

 const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.empno} </td>
            <td>{key.empname} </td>
            <td>{key.designation} </td>
            <td>{key.salary} </td>
            <td>
                
                <a href="#" onClick={()=>{myrecEdit(key._id)}}>
                <img src={edimage} width="30" height="30"/>
                </a>
                

                 <a href="#" onClick={()=>{myrecDel(key._id)}}>
                 <img src={delimage} width="30" height="30"/>
                 </a>
                
                 </td>
          </tr>
        </>
      )
 })

    return(
        <>
          <h1> Update Employee Records</h1>
          <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Employee No.</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th> Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Update;