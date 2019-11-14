import React, { useState } from "react";
import Overview from "../shared/Overview";
import Table from "../Tables/Table";

function RiderPage() {
  const [UIData] = useState(UI.overViewHeader);
  const [TableHeader] = useState(UI.table.header);
  const [riderUI] = useState({ ...UI });

  const [data, setDate] = useState([...riderData]);

  return (
    <div className="main">
      <h2>Riders</h2>
      <Overview overview={UIData} />
      <div className="row">
        <div className="col-md-8">
          <button className="btn btn-info">Add Riders</button>
        </div>
        <div className="col-md-4">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <Table tableHeader={TableHeader} data={data} UI={riderUI} />
    </div>
  );
}

export default RiderPage;

// component Label
const name = "Sacco";
// UI specifics props

const UI = {
  overViewHeader: ["Total Riders", "Deactivated", "Active"],
  table: {
    header: ["Name", "Status", "Rating", "Location", "Reports", "Actions"]
  },
  modal: "Rider"
};

// mock Data

const riderData = [
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  }
];
