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


    db.query('INSERT INTO teacher (t_id, t_name, t_dept, t_mail, t_mobile, t_des) VALUES (?,?,?,?,?,?) ', [teacherID, teacherName, teacherDepartment, teacherMail, teacherMobile, teacherDescription], (err, result) =>{
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
    const studentSemester = req.body.studentSemester;
    const studentPMail = req.body.studentPMail;
    const studentEMail = req.body.studentEMail;
    const studentPMobile = req.body.studentPMobile;
    const studentEMobile = req.body.studentEMobile;


    db.query('INSERT INTO student (s_reg, s_name, s_roll, s_mail1, s_mail2, s_mobile1, s_mobile2, s_semester ) VALUES (?,?,?,?,?,?,?,?) ', [studentReg, studentName, studentRoll, studentPMail, studentEMail, studentPMobile, studentEMobile, studentSemester], (err, result) =>{
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
    const courseCredit = req.body.courseCredit;
    

    db.query('INSERT INTO course (c_uid, c_name, c_code, c_credit) VALUES (?,?,?,?) ', [courseCode + "2022", courseName, courseCode, courseCredit], (err, result) =>{
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


app.post("/createSemester", (req,res)=>{
    const semesterName = req.body.semesterName;
    const semesterYear = req.body.semesterYear;
    const semesterOId = req.body.semesterOId;
    

    db.query('INSERT INTO semester (semester_uid, semester_name, year, o_id) VALUES (?,?,?,?) ', [semesterName + year, semesterName, semesterYear, semesterOId], (err, result) =>{
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

app.get("/semester", (req,res) =>{
    db.query('SELECT * FROM semester', (err,result) =>{

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


app.get("/course", (req,res) =>{
    db.query('SELECT * FROM course', (err,result) =>{

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


app.get("/student", (req,res) =>{
    db.query('SELECT * FROM student', (err,result) =>{

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