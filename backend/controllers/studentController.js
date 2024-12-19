const StuModel= require("../models/employeeModel");
const stuDataSave=async(req, res)=>{
    const {empno, empname, designation, salary}= req.body;
     try {
        const Student=await StuModel.create({
            empno:empno,
            empname:empname,
            designation:designation,
            salary:salary
        })  
        res.status(200).json(Student);
     } catch (error) {
        res.status(404).json("MongoDB Server No Strated!!!");
     }
}

const stuDataDisplay=async(req, res)=>{
 
    try {
        const studata= await StuModel.find();
        res.status(200).json(studata);
    } catch (error) {
         res.status(404).json("Data from MongoDB not Found!")
    }
}


const stuDataSearch=async(req, res)=>{
         let {empno}= req.body;
         const myData=await StuModel.find({empno:empno})         
         res.send(myData);
}

const stuUpdateDataDisplay=async(req, res)=>{
     const Data= await StuModel.find();
     res.send(Data);
}

const stuDataDelete=async(req, res)=>{
   const myid= req.body.id;
   const student=await  StuModel.findByIdAndDelete(myid);   
   res.send("record deleted!")
}

const stuDataEdit=async(req, res)=>{
    const id=req.body.id;
    const studata= await  StuModel.findById(id);
    res.send(studata);
}

const stuEditSave = async (req, res) => {
    const id = req.body._id;  // Get the _id from the request body (make sure you are sending it from the frontend)
    const updatedData = {
      empno: req.body.empno,
      empname: req.body.empname,
      designation: req.body.designation,
      salary: req.body.salary,
    };
  
    try {
      // Use findByIdAndUpdate to update the record in MongoDB
      const studata = await StuModel.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (studata) {
        res.status(200).send(studata);  // Return the updated data
      } else {
        res.status(404).send({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Error updating student data', error });
    }
  };
  
module.exports={
    stuDataSave,
    stuDataDisplay,
    stuDataSearch,
    stuUpdateDataDisplay,
    stuDataDelete,
    stuDataEdit,
    stuEditSave
}