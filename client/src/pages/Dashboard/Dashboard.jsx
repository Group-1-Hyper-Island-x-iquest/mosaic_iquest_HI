import React, { useEffect } from "react";
import { ws } from "../../utils/webSocket";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import Form from "../../components/Forms/Form";
import { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadConnectionsData();
  }, []);

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  const fields = [
    { type: "text", name: "name", label: "Name" },
    { type: "email", name: "email", label: "Email" },
    { type: "textarea", name: "message", label: "Message" },
    {
      type: "select",
      name: "gender",
      label: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
  ];

  const loadConnectionsData = () => {
    ws.send(JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" }));
    ws.onmessage = (res) => {
      dispatch({
        type: CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS,
        payload: JSON.parse(res.data),
      });
    };
  };

  console.log(connection);

  return (
    <div className="flex">
      <Form fields={fields} buttonClass={BUTTON_TYPE_CLASSES.btn_primary} onSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
