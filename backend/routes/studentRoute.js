const express = require("express");
const route= express.Router();
const stuController= require("../controllers/studentController");

route.post("/studentsave", stuController.stuDataSave);
route.get("/studentdisplay", stuController.stuDataDisplay);
route.post("/studentsearch", stuController.stuDataSearch);
route.get("/studentupdatedisplay", stuController.stuUpdateDataDisplay);
route.post("/studentdatadelete", stuController.stuDataDelete);
route.post("/studenteditdata", stuController.stuDataEdit);
route.post("/studenteditsave", stuController.stuEditSave);



module.exports=route;