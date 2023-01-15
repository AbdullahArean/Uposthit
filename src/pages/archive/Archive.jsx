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
  const [percentage, setPercentage] = useState([]);
  const [percentageS, setPercentageS] = useState([]);
  const [presence, setPresence] = useState([]);
  const [lecDate, setLecDate] = useState([]);
  let { courseID } = useParams();

  let DataLoading = false;

  const getlecture = () => {
    if (loading) {
      axios.get("/?getlecture&course_id=" + courseID).then((response) => {
        setLectures(response.data);
        setLectureID(response.data.l_id);
      });
    }
  };

  const viewPercentage = () => {
    axios
      .post("/?getpercentage&c_code=" + courseID, {
        c_code: courseID,
      })
      .then((response) => {
        setPercentage(response?.data);
        DataLoading = false;
      });
  };

  const viewPercentageS = () => {
    axios
      .post("/?getpercentageforcourse&c_code=" + courseID, {
        c_code: courseID,
      })
      .then((response) => {
        setPercentageS(response?.data);
        console.log(response.data);
        DataLoading = false;
      });
  };

  const viewAttendance = async () => {
    axios
      .post("/?viewattendance&c_code=" + courseID, {
        c_code: courseID,
      })
      .then((response) => {
        setAttendance(response?.data);
        setLecDate(response.data[0].l_date);
        DataLoading = false;
      });
  };

  useEffect(() => {
    viewAttendance();
    getlecture();
    viewPercentage();
    viewPercentageS();
  }, []);
  return (
    <div className="flex">
      <Sidebar className="fixed top-0 left-0 z-20" />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="">
          <div className="ml-7 pr-2">
            <Table
              className="rounded-lg mb-6"
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
              <Column width={350} align="left" fixed>
                <HeaderCell>Percentage</HeaderCell>
                <Cell dataKey="Percent" />
              </Column>
            </Table>
            <div className="flex gap-16">
              <div className="w-96 text-center text-xl">
                Attendance Percentage
              </div>
              {percentage.map((p, i) => {
                return (
                  <div key={i} className="text-center px-1">
                    <div>{p.Percentage}%</div>
                  </div>
                );
              })}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
