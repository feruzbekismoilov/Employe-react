import { useState, useRef } from "react";
import "./Main.css";
import Form from "../Form";
import Employes from "../Employes";

import React from "react";

const Main = () => {
  const [employes, setEmployes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const salaryRef = useRef(null);
  const birthdayRef = useRef(null);
  const jobRef = useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newEmploye = {
      id: employes[employes.length - 1]?.id + 1 || 1,
      firstname: firstnameRef.current?.value.trim(),
      lastname: lastnameRef.current?.value.trim(),
      salary: salaryRef.current?.value.trim(),
      job: jobRef.current?.value.trim(),
    };
    console.log(newEmploye);
    console.log(firstnameRef.current);
    if (selectedIndex !== null) {
      employes[selectedIndex] = newEmploye;
      setSelectedIndex(null);
    } else {
      setEmployes([...employes, newEmploye]);
    }

    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    salaryRef.current.value = "";
    jobRef.current.value = "";

    firstnameRef.current.focus();
  };
  const handleDelete = (id) => {
    // console.log(id);
    const filteredEmployes = employes.filter((employe) => employe.id !== id);
    setEmployes([...filteredEmployes]);
  };

  const handleEdit = (index) => {
    // console.log(index);
    setSelectedIndex(index);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Add employes</h2>
            </div>
            <div className="card-body">
              <Form
                firstnameRef={firstnameRef}
                lastnameRef={lastnameRef}
                salaryRef={salaryRef}
                birthdayRef={birthdayRef}
                jobRef={jobRef}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className="col-9">
          <ul className="employes-list">
            {employes.length > 0 &&
              employes.map((employe, index) => (
                <Employes
                  employe={employe}
                  index={index}
                  key={index}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

// import EmployeeForm from "../Form";

// import React, { useState, useRef } from "react";

// function EmployeeTable() {
//   const [employees, setEmployees] = useState([]);
//   const tableRef = useRef(null);

//   const addEmployee = (employee) => {
//     setEmployees([...employees, employee]);
//   };

//   return (
//     <>
//       <EmployeeForm addEmployee={addEmployee} />
//       <table >
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Position</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={index}>
//               <td>{employee.name}</td>
//               <td>{employee.position}</td>
//               <td>{employee.salary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }
// export default EmployeeTable;
