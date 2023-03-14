import React from "react";
import { Steps, ConfigProvider } from "antd";
import "./Jobs.css";

const CreateJob = () => {
  return (
    <>
      <div className="progress-bar-container">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#F28F09",
            },
          }}
        >
          <Steps
            className="progress-bar"
            progressDot
            size={"large"}
            current={0}
            items={[
              {
                title: "Select",
              },
              {
                title: "Review",
              },
              {
                title: "Save",
              },
            ]}
          />
        </ConfigProvider>
      </div>
      <h1 className="jobs-page-title">Select data points</h1>
      <p className="jobs-page-description">
        Select the data points you want to add to this connection
      </p>
    </>
  );
};

export default CreateJob;

