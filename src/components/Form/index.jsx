import "./Form.css";

import React from "react";
// import { FaMale, FaFemale } from "react-icons/fa";
const Form = ({
  firstnameRef,
  lastnameRef,
  salaryRef,
  birthdayRef,
  jobRef,
  typeRef,
  handleSubmit,
}) => {
  // const [gender, setGender] = useState();

  const handleGenderChange = (event) => {
    // setGender(event.target.value);
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="firstName-input w-100 form-control"
        type="text"
        ref={firstnameRef}
        placeholder="Username"
      />
      <input
        className="lastName-input w-100 form-control"
        type="text"
        ref={lastnameRef}
        placeholder="Lastname"
      />
      <input
        className="salary-input w-100 form-control"
        type="Number"
        ref={salaryRef}
        placeholder="Enter salary"
      />
      <input className="birth-day--input" type="date" ref={birthdayRef} />
      <select className="job-select d-block w-100" ref={jobRef}>
        <option value="select"> Select your job</option>
        <option value="rektor">Rektor</option>
        <option value="dekan">Dekan</option>
        <option value="zamdekan">Zamdekan</option>
      </select>
      <div className="d-flex mt-3">
        <label className="d-flex align-item-center">
          Mail
          <input
            className="select-mail ms-2"
            type="radio"
            ref={typeRef}
            name="gender"
            value="male"
            onChange={handleGenderChange}
          />
        </label>
        <label className="d-flex align-item-center ms-4">
          Fmail
          <input
            ref={typeRef}
            className="select-fmail ms-2"
            type="radio"
            name="gender"
            value="female"
            onChange={handleGenderChange}
          />
        </label>
      </div>
      <button className="btn btn-success btn-add mt-2 form-control">Add</button>
    </form>
  );
};

export default Form;
