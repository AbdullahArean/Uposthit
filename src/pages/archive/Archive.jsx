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
  const [attendance, setAttendance] = useState([]);
  const [presence, setPresence] = useState([]);
  const [lecDate, setLecDate] = useState([]);
  let { courseID } = useParams();

  let DataLoading = false;

  const getlecture = () => {
    if (loading) {
      axios.get("/?getlecture&course_id=" + courseID).then((response) => {
        setLectures(response.data);
        setLectureID(response.data.l_id);
        console.log(response.data)
      });
    }
  };

  const viewAttendance = async () => {
    axios
      .post("/?viewattendance&c_code=" + courseID, {
        c_code: courseID,
      })
      .then((response) => {
        setAttendance(response?.data);
        console.log(response.data)
        setLecDate(response.data[0].l_date);
        DataLoading = false;
      });
  };

  useEffect(() => {
    viewAttendance();
    getlecture();
  }, []);
  return (
    <div className="flex">
      <Sidebar className="fixed top-0 left-0 z-20" />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="mx-7">
          <Table
            className="rounded-lg mb-24"
            loading={DataLoading}
            hover={false}
            data={attendance}
            rowKey="s_classroll + l_id"
            height={850}
            onSortColumn={(sortColumn, sortType) => {
              console.log(sortColumn, sortType);
            }}
          >
            <Column width={100} align="center" fixed>
              <HeaderCell>Roll</HeaderCell>
              <Cell dataKey="s_classroll" />
            </Column>
            <Column width={300} align="left" fixed>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="s_name" />
            </Column>
            {lectures.map((lec, i) => {
              return (
                <Column key={i} width={150} align="center" fullText>
                  <HeaderCell>{lec.l_date}</HeaderCell>
                  <Cell dataKey={`presence[${i * 2}]`} />
                </Column>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Archive;
