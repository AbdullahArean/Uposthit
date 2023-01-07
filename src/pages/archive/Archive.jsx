/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Archive = () => {
  const [loading, setLoading] = useState(true);
  const [lectures, setLectures] = useState([]);
  const [teacherID, setTeacherID] = useState("");
  const [lectureID, setLectureID] = useState([]);
  let { courseID } = useParams();
    const getlecture = () => {
      if (loading) {
        axios.get("/?getlecture&course_id=" + courseID).then((response) => {
          setLectures(response?.data);
          for (var i = 0; i < response.data.length; i++) {
            setLectureID(lectures[i].lecture_id);
            setTeacherID(lectures[i].teacher_id);
          }
          setLoading(false);
          console.log(response.data);
        });
      }
    };

  const getteachers = () => {
    if (loading) {
      axios.get("/?getteachers&course_id=" + courseID).then((response) => {
        const what = response.data[0].teacher_id;
        setTeacherID(what);
        console.log(response.data[0].teacher_id);
        console.log(courseID);
        setLoading(false);
        console.log(teacherID);
      });
    }
  };

  useEffect(() => {
    getteachers();
    // console.log(lectureID);
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        {/*lectures.map((lecture) => {
          return (
            <div key={lecture.lecture_id}>
              {lecture.lecture_id}
              {courseID}
              {lecture.teacher_id}
            </div>
          );
        })*/}
      </div>
    </div>
  );
};

export default Archive;
