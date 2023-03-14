import React from "react";
import { useDispatch } from "react-redux";
import { showModalConnections, showModalJobs } from "../../reducers-actions/modalActions";
import "./CreateTile.css";

const CreateTile = (props) => {
  const dispatch = useDispatch();

  const openModalConnections = () => {
    dispatch(showModalConnections());
    console.log("conn");
  };

  const openModalJobs = () => {
    dispatch(showModalJobs());
    console.log("job");
  };

  const functionMap = {
    "Create New Connection": openModalConnections,
    "Create New Job": openModalJobs,
  };

  const handleButtonClick = (title) => {
    const selectedFunction = functionMap[title];
    console.log(title);
    if (selectedFunction) {
      selectedFunction();
    }
  };

  const { title, icon } = props;
  return (
    <>
      <button name={title} onClick={() => handleButtonClick(title)} className="createTile">
        <h1 className="create_tile_title">{title}</h1>
        <div className="plus_icon">{icon}</div>
      </button>
    </>
  );
};

export default CreateTile;

// You can replace the titles and functions in the functionMap object with your own titles and functions as needed.

// In this file, the functionMap object maps the title of each button to the corresponding function. When a button is clicked, the handleButtonClick function takes the title as an argument and looks up the corresponding function in the functionMap object. If a matching function is found, it is called.

// When the "openModalConnections" button is clicked, the handleButtonClick function is called with the argument "openModalConnections". The function looks up the corresponding function in the functionMap object and calls openModalConnections. When the "openModalJobs" button is clicked, the handleButtonClick function is called with the argument "openModalJobs". The function looks up the corresponding function in the functionMap object and calls openModalJobs.
