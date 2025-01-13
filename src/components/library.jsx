import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Table from "./table";
import OverlayImage from "../Icons/pexels-format-380633-1029757.jpg";

const Library = () => {
  const [myData, setMyData] = useState([
    {
      filename: "Tech requirements.pdf",
      status: "Uploaded",
      createdAt: "Jan 4, 2024",
      createdBy: "Olivia Rhye",
      createdByEmail: "olivia@untitledui.com",
    },
    {
      filename: "Dashboard screenshot.jpg",
      status: "Connected",
      createdAt: "Jan 4, 2024",
      createdBy: "Phoenix Baker",
      createdByEmail: "phoenix@untitledui.com",
    },
    {
      filename: "Dashboard prototype recording.mp4",
      status: "Connected",
      createdAt: "Jan 2, 2024",
      createdBy: "Lana Steiner",
      createdByEmail: "lana@untitledui.com",
    },
    {
      filename: "Dashboard prototype FINAL.fig",
      status: "Connected",
      createdAt: "Jan 6, 2024",
      createdBy: "Demi Wilkinson",
      createdByEmail: "demi@untitledul.com",
    },
    {
      filename: "UX Design Guidelines.docx",
      status: "Connected",
      createdAt: "Jan 8, 2024",
      createdBy: "Candice Wu",
      createdByEmail: "candice@untitledui.com",
    },
    {
      filename: "Dashboard interaction.aep",
      status: "Error",
      createdAt: "Jan 6, 2024",
      createdBy: "Natali Craig",
      createdByEmail: "natali@untitledui.com",
    },
    {
      filename: "Dashboard interaction.aep",
      status: "Connected",
      createdAt: "Jan 6, 2024",
      createdBy: "Natali Craig",
      createdByEmail: "natali@untitledui.com",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleDelete = (filename) => {
    setMyData((prevData) =>
      prevData.filter((item) => item.filename !== filename)
    );
  };

  const filteredData = myData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      item.filename.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.status.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.createdBy.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const handleClose = () => {
    navigate("/signin");
  };

  return (
    <div className="library">
      <img src={OverlayImage} alt="Background" />
      <div className="overlay"></div>
      <div className="content">
        <div className="header">
          <div className="text">
            <p className="lg-semibold">Library</p>
            <p className="sm-regular">
              Here is a list of datasets already connected to your Obviously AI
              account.
            </p>
          </div>
          <div className="close" onClick={handleClose}>
            <IoCloseOutline className="icon" />
          </div>
        </div>
        <div className="data">
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearch className="magnifier" />
          </div>

          <Table filteredData={filteredData} handleDelete={handleDelete} />

          <button className="primary-btn next" onClick={handleClose}>
            Next <GrFormNextLink className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
