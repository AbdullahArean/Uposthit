const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());


const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "password",
        database: 'uposthit',

    }
);

app.post("/createTeacher", (req,res)=>{
    const teacherName = req.body.teacherName;
    const teacherID = req.body.teacherID;
    const teacherDepartment = req.body.teacherDepartment;
    const teacherMail = req.body.teacherMail;
    const teacherMobile = req.body.teacherMobile;
    const teacherDescription = req.body.teacherDescription;


    db.query('INSERT INTO teacher (t_id, t_name, t_dept, t_mail, t_mobile, t_description) VALUES (?,?,?,?,?,?) ', [teacherID, teacherName, teacherDepartment, teacherMail, teacherMobile, teacherDescription], (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted");
        }
    }  )

})


app.post("/createStudent", (req,res)=>{
    const studentName = req.body.studentName;
    const studentReg = req.body.studentReg;
    const studentRoll = req.body.studentRoll;
    const studentYear = req.body.studentYear;
    const studentPMail = req.body.studentPMail;
    const studentEMail = req.body.studentEMail;
    const studentPMobile = req.body.studentPMobile;
    const studentEMobile = req.body.studentEMobile;


    db.query('INSERT INTO student (s_reg, s_name, s_roll, s_mail1, s_mail2, s_mobile1, s_mobile2, s_year ) VALUES (?,?,?,?,?,?,?,?) ', [studentReg, studentName, studentRoll, studentPMail, studentEMail, studentPMobile, studentEMobile, studentYear], (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted");
        }
    }  )

})


app.post("/createOfficer", (req,res)=>{
    const officerName = req.body.officerName;
    const officerID = req.body.officerID;
    const officerDesignation = req.body.officerDesignation;
    const officerMail = req.body.officerMail;
    const officerMobile = req.body.officerMobile;
    

    db.query('INSERT INTO officer (o_id, o_name, o_des, o_mail, o_mobile) VALUES (?,?,?,?,?) ', [officerID, officerName, officerDesignation, officerMail, officerMobile], (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted");
        }
    }  )

})

app.post("/createCourse", (req,res)=>{
    const courseName = req.body.courseName;
    const courseCode = req.body.courseCode;
    const courseSemester = req.body.courseSemester;
    const courseYear = req.body.courseYear;
    const courseByOfficerID = req.body.courseByOfficerID;
    

    db.query('INSERT INTO course (c_uid, c_name, c_code, semester, year, o_id) VALUES (?,?,?,?,?,?) ', [courseCode + courseYear, courseName, courseCode, courseSemester, courseYear, courseByOfficerID], (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted");
        }
    }  )

})


app.get("/teachers", (req,res) =>{
    db.query('SELECT * FROM teacher', (err,result) =>{

        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }

    })
})

app.listen(3001, ()=>{
    console.log("yaay running");
})