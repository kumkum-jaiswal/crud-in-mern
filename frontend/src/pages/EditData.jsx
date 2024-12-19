import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData=()=>{
    const navigate=useNavigate();
    const {empid} =useParams();
    const [mydata, setMydata]= useState({}); 
    //mydata={_id: '670ccbfdbf666d7b59298d89', empno: 1002, empname: 'sakshi', salary: 56000, __v: 0}

    const loadData=()=>{
        let api="http://localhost:8000/students/studenteditdata";
        axios.post(api, {id:empid}).then((res)=>{
           console.log(res.data);
           setMydata(res.data);
        })
    }

 useEffect(()=>{
    loadData();
 }, [])
 const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
}
const handlesubmit = () => {
    let api = "http://localhost:8000/students/studenteditsave";
    console.log("Sending data to server:", mydata);  // Log the data being sent
    
    axios.post(api, mydata)
      .then((res) => {
        console.log("Response from server:", res.data);  // Log the response from the server
        alert("Data updated successfully!");
        navigate("/update");
      })
      .catch((err) => {
        console.error("Error updating data:", err);  // Handle and log the error
        alert("Error updating data.");
      });
  };
  

    return(
        <>
         <h1> Edit Employee Data</h1>
         Edit Emp no <input type="text" name="empno"
         value={mydata.empno}  onChange={handleinput}/>
         <br/>
         Edit Emp name <input type="text" value={mydata.empname} name="empname"  onChange={handleinput}/>
         <br/>
         Edit Designation <input type="text" value={mydata.designation} name="designation" onChange={handleinput}/>
         <br/>
         Edit Salary <input type="text" value={mydata.salary} name="salary" onChange={handleinput}/>
         <br/>
         <button onClick={handlesubmit}>submit</button>
        </>
    )
}
export default EditData;