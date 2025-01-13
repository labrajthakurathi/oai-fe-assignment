import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa6";
import DocIconRenderer from "./docIconRenderer";

const LibraryTable = ({ filteredData, handleDelete }) => {
  return (
    <div className="table">
      <table>
        <colgroup>
          <col style={{ width: "520px" }} />
          <col style={{ width: "132px" }} />
          <col style={{ width: "198px" }} />
          <col style={{ width: "272px" }} />
        </colgroup>
        <thead>
          <tr>
            <th className="xs-medium">
              <div className="checkbox-container title">
                <input type="checkbox" /> Dataset Name{" "}
                <FaArrowDown className="down-arrow" />
              </div>
            </th>
            <th className="xs-medium">Status</th>
            <th className="xs-medium">Created at</th>
            <th className="xs-medium">Created by</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="sm-regular">
                <div className="checkbox-container">
                  <input type="checkbox" />
                  <DocIconRenderer fileName={item.filename} />
                  {item.filename}
                </div>
              </td>
              <td className="sm-regular">
                <div
                  className={
                    item.status === "Error" ? "status red" : "status green"
                  }
                >
                  <p>{item.status}</p>
                </div>
              </td>
              <td className="sm-regular">{item.createdAt}</td>
              <td className="sm-regular ">
                <div>
                  <p>{item.createdBy}</p>
                  <p>{item.createdByEmail}</p>
                </div>
              </td>
              <td className="sm-regular trash">
                <span onClick={() => handleDelete(item.filename)}>
                  <RiDeleteBinLine />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryTable;
