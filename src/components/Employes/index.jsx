import "./Employes.css";
import lodash from "lodash";
import React from "react";

function capitalize(str) {
  return lodash.capitalize(str);
}

function Employes({ employe, index, handleDelete, handleEdit }) {
  console.log(Employes);
  return (
    <li className="employe-item">
      <div className="card h-100">
        <div className="card-header">
          <h3 className="employe-firstname text-center">
            {capitalize(employe.firstname)} {capitalize(employe.lastname)}
          </h3>
        </div>
        <div className="card-body">
          <strong className="employe-salary">Salary:{employe.salary}$</strong>
          <data datatype="">{employe.birthday}</data>
          <p className="employe-job">Job:{employe.job}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-primary" onClick={() => handleEdit(index)}>
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(employe.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Employes;
