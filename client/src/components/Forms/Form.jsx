import React, { useState } from "react";
import Button from "../Button/Button";

const Form = (props) => {
  const { fields, onSubmit, buttonClass } = props;
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field) => {
    const { type, name, label, options } = field;

    if (type === "select") {
      return (
        <div key={name}>
          <label className="formLabel" htmlFor={name}>
            {label}
          </label>
          <select className="formSelect" name={name} onChange={handleInputChange}>
            <option>Please select</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div key={name}>
          <label className="formLabel" htmlFor={name}>
            {label}
          </label>
          {type === "textarea" ? (
            <textarea
              placeholder="Optional"
              className="formTextArea"
              rows={3}
              name={name}
              onChange={handleInputChange}
            />
          ) : (
            <div className="w-1/2">
              <input
                placeholder="Required"
                className="formInput"
                type={type}
                name={name}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field) => renderField(field))}
      <div className="flex justify-end w-full ">
        <Button buttonType={buttonClass}>Submit</Button>
      </div>
    </form>
  );
};

export default Form;