export const userColumns = [
  {
    field: "EmployeeName",
    headerName: "Employee Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.EmployeeName}
        </div>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
  },
  {
    field: "supervisor",
    headerName: "Supervisor",
    width: 130,
  },
  {
    field: "company",
    headerName: "Company",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start date",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    width: 130,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.type}`}>
          {params.row.type}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "12345678",
    type: "Employee",
  },

  {
    id: 2,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "intern",
  },

  {
    id: 3,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "Employee",
  },

  {
    id: 4,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "intern",
  },
  {
    id: 5,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "intern",
  },
  {
    id: 6,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "intern",
  },
  {
    id: 7,
    EmployeeName: "Mehdi Bouayaben",
    img: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
    role: "UI UX Designer",
    supervisor: " Yassine Ouarrak",
    company: "DIGIEYE",
    startDate: "15/07/2021",

    email: "test@gmail.com",
    phone: "15/07/2021",
    type: "intern",
  },
];
