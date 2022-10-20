
import Axios from 'axios'

export const studentColumns = [
    { field: 's_name', headerName: 'Name', width: 200},
    { field: 'id', headerName: 'Registration No.', width: 150 },
    { field: 's_roll', headerName: 'Roll', width: 70},
    { field: 's_semester', headerName: 'Current Semester', width: 150},
    { field: 's_mobile1',headerName: 'Primary Contact',width: 150},
    { field: 's_mail1',headerName: 'Primary Mail',width: 250},
    { field: 's_mobile2',headerName: 'Emergency Contact',width: 150,},
    { field: 's_mail2',headerName: 'Emergency Mail',width: 250}
  ];

  
  export const getStudent = () => {
   Axios.get('http://localhost:3001/student')
        .then(response => {
            // console.log(response);
            // let data = response.data;
            // let goodData = JSON.parse(data);
            // // rows(response);

            console.log(response)
            return response;
        })
    
  }

//   export const rows = (response) => {
//     s_name = response.data[0].s_name;
//     id = response.data[0].s_id;
//   }

  
export const studentRows = [
    {
        s_name: "dshdjh",
        id: "2023-382-953",
        s_roll: "SH-58",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    {
        s_name: "dshdjh",
        id: "2023-382-952",
        s_roll: "SH-58",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    {
        s_name: "dshdjh",
        id: "2023-382-954",
        s_roll: "SH-59",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    {
        s_name: "dshdjh",
        id: "2023-382-953",
        s_roll: "SH-58",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    {
        s_name: "dshdjh",
        id: "2023-382-956",
        s_roll: "SH-58",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    
]

// export const studentRows = getStudent().map((singleData) => {
//     return(
//         {
//                     s_name: singleData[0].s_name,
//                     id: "2023-382-953",
//                     s_roll: "SH-58",
//                     s_mobile1: "01847238434",
//                     s_mail1: "student@example.com",
//                     s_mobile2: "01847238434",
//                     s_mail2: "student@example.com",
//                     s_year: "1st"
//         }
//     )
// })