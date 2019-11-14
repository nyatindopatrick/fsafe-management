import React, { useState } from "react";
import Overview from "../shared/Overview";
import Table from "../Tables/Table";

function SaccoDashBoard() {
  const [UIData] = useState(UI.overViewHeader);
  const [TableHeader] = useState(UI.table.header);
  const [saccoUI] = useState({ ...UI });
  const [data, setDate] = useState([...saccoData]);

  return (
    <div className="main">
      <div className="page-container">
        <h2>{name}</h2>
        <Overview overview={UIData} />

        <div className="row ">
          <div className="col-md-8">
            <button className="btn btn-info">Add Sacco</button>
          </div>
          <div className="col-md-4 ">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <Table UI={saccoUI} tableHeader={TableHeader} data={data} />
      </div>
    </div>
  );
}

export default SaccoDashBoard;

// component Label
const name = "Sacco";
// UI specifics props

const UI = {
  overViewHeader: ["Total Sacco", "Deactivated", "Active"],
  table: {
    header: ["Sacco", "Status", "Riders", "Location", "Reports", "Actions"]
  },
  modal: "Sacco"
};

// mock Data

const saccoData = [
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivate"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  },

  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivate"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivate"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivate"
  },
  {
    sacco: "Kisumu Sacco",
    status: "Active",
    riders: 234,
    location: "Oginga Street",
    reports: 3434,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  }
];
