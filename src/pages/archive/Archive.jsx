/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";

const Archive = () => {
  const [loading, setLoading] = useState(true);
  const [lectures, setLectures] = useState([]);
  const [teacherID, setTeacherID] = useState("");
  const [lectureID, setLectureID] = useState([]);
  const [ attendance, setAttendance] = useState([]);
  let { courseID } = useParams();

  let DataLoading = false;

  const getlecture = () => {
    if (loading) {
      axios.get("/?getlecture&course_id=" + courseID).then((response) => {
        setLectures(response.data);
        setLoading(false);
      });
    }
  };

  const viewAttendance = () => {
    axios
        .post("/?viewattendance&c_code=" + courseID, {
          c_code: courseID
        })
        .then((response) => {
          setAttendance(response?.data);
          console.log(response?.data);
          DataLoading = true;
        });
  }

  useEffect(() => {
    viewAttendance();
    getlecture();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div>
        <Table
          className="rounded-lg mb-24"
          loading={DataLoading}
          hover={false}
          data={attendance}
          rowKey="s_classroll + l_id"
          autoHeight
          onSortColumn={(sortColumn, sortType) => {
            console.log(sortColumn, sortType);
          }}
        >
          <Column width={50} align="left" fixed>
            <HeaderCell>Roll</HeaderCell>
            <Cell dataKey="s_classroll" />
          </Column>
          <Column width={250} align="left" fullText>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="s_name" />
          </Column>
          {lectures.map((lec) => {
            return(
          <Column width={120} align="left" fullText>
            <HeaderCell>{lec.l_date}</HeaderCell>
            <Cell dataKey="presence" />
          </Column>
            )
          })}
        </Table>
        </div>
      </div>
    </div>
  );
};

export default Archive;
