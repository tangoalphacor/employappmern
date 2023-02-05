
import React, { useState } from "react";
import "./Employ.css"

const Employ = () =>  {
  const [employees, setEmployees] = useState([    { name: "John Doe", jobTitle: "Developer", department: "IT", salary: "$100,000" },    { name: "Jane Doe", jobTitle: "Designer", department: "UX", salary: "$90,000" },  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const selectEmployee = index => () => {
    setSelectedIndex(index);
  };

  const updateSelectedEmployee = event => {
    setSelectedEmployee({
      ...selectedEmployee,
      [event.target.name]: event.target.value
    });
  };

  const updateEmployee = index => () => {
    setSelectedIndex(index);
    setSelectedEmployee(employees[index]);
  };

  const saveEmployee = () => {
    const newEmployees = [...employees];
    newEmployees[selectedIndex] = selectedEmployee;
    setEmployees(newEmployees);
    setSelectedIndex(-1);
    setSelectedEmployee({});
  };

  const deleteEmployee = index => () => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const addEmployee = () => {
    setEmployees([...employees, { name: '', department: '', salary: '' }]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                {selectedIndex === index ? (
                  <input
                    type="text"
                    value={employee.name}
                    name="name"
                    onChange={updateSelectedEmployee}
                  />
                ) : (
                  <span onClick={selectEmployee(index)}>{employee.name}</span>
                )}
              </td>
              <td>
                {selectedIndex === index ? (
                  <input
                    type="text"
                    value={employee.jobTitle}
                    name="jobTitle"
                    onChange={updateSelectedEmployee}
                  />
                ) : (
                  <span onClick={selectEmployee(index)}>{employee.jobTitle}</span>
                )}
              </td>
              <td>
                {selectedIndex === index ? (
                  <input
                    type="text"
                    value={employee.department}
                    name="department"
                    onChange={updateSelectedEmployee}
                  />
               

                ) : (
                    <span onClick={selectEmployee(index)}>{employee.department}</span>
)}
</td>
<td>
{selectedIndex === index ? (
<input
                 type="text"
                 value={employee.salary}
                 name="salary"
                 onChange={updateSelectedEmployee}
               />
) : (
<span onClick={selectEmployee(index)}>{employee.salary}</span>
)}
</td>
<td>
<button onClick={updateEmployee(index)}>Update</button>
<button onClick={deleteEmployee(index)}>Delete</button>
{selectedIndex === index && <button onClick={saveEmployee}>Save</button>}
</td>
</tr>
))}
</tbody>
</table>
<button onClick={addEmployee}>Add Employee</button>
</div>
);
};

export default Employ;
                 
