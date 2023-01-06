/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";

const AForm = ({ teacher, loading, course }) => {
  var data = teacher;
  const [teacherID, setTeacherID] = useState("");
  const [courseID, setCourseID] = useState([]);
  const changeTeacher = (event) => {
    setTeacherID(event.target.value);
    var allInputs = document.getElementsByTagName("input");
    for (var i = 0, max = allInputs.length; i < max; i++) {
      if (allInputs[i].type === "checkbox") allInputs[i].checked = false;
    }
  };
  const takeAttendance = (e, course_id) => {
    if (e.target.checked) {
      setCourseID((array) => [...array, course_id]);
    } else {
      setCourseID(courseID.filter((item) => item !== course_id));
    }
  };
  const renderOption = Object.keys(data).map((e) => {
    var t_name = data[e].t_name;
    var t_id = data[e].id;
    var t_code = data[e].t_code;
    var teacher_text = t_name + " - " + t_code;
    return (
      <option key={data[e].id} value={t_id}>
        {teacher_text}
      </option>
    );
  });
  useEffect(() => {
  }, []);
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="mb-6 flex flex-col justify-center">
        <label
          htmlFor="teacher"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Select Teacher
        </label>
        <select
          key={teacher.id}
          id="teacher"
          className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
          onChange={(event) => {
            changeTeacher(event);
          }}
        >
          <option>-</option>
          {loading ? "" : renderOption}
        </select>
        <span id="tError" className="text-red-800"></span>
      </div>
      <div className="flex flex-col gap-y-6">
        {course.map((course) => {
          return (
            <div key={course.course_id} className="flex gap-8 ">
              <div className="flex items-center gap-2">
                <input
                  id="teal-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                  onChange={(e) => takeAttendance(e, course.course_id)}
                />
                <label
                  htmlFor="teal-checkbox"
                  className="ml-2 text-lg font-medium text-gray-900"
                >
                  <div className="flex gap-6">
                    <div className="">{course.course_code}</div>
                    <div className="">{course.course_name}</div>
                  </div>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AForm;
