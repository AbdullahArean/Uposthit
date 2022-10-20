
import Axios from 'axios'

export const studentColumns = [
    { field: 's_name', headerName: 'Name', width: 200},
    { field: 'id', headerName: 'Registration No.', width: 150 },
    { field: 's_roll', headerName: 'Roll', width: 70},
    { field: 's_year', headerName: 'Current Year', width: 150},
    { field: 's_mobile1',headerName: 'Primary Contact',width: 150},
    { field: 's_mail1',headerName: 'Primary Mail',width: 250},
    { field: 's_mobile2',headerName: 'Emergency Contact',width: 150,},
    { field: 's_mail2',headerName: 'Emergency Mail',width: 250}
  ];

  
  export const getStudent = () => {
    Axios.get('http://localhost:3001/student')
        .then(response => {
            console.log(response);
        })
  }



  
export const studentRows = [
    {
        s_name: "John Marshall Doe",
        id: "2023-382-953",
        s_roll: "SH-58",
        s_mobile1: "01847238434",
        s_mail1: "student@example.com",
        s_mobile2: "01847238434",
        s_mail2: "student@example.com",
        s_year: "1st"
    },
    
]