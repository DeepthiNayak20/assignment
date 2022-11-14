import { useState } from "react";
import "./common.css";

const AddForm = () => {
  const [data, setData] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("data", data);
  };
  return (
    <div>
      <form action="" className="formContainer" onSubmit={onSubmit}>
        <div className="inputField">
          <input
            type="text"
            className="userName"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
        </div>
        <div className="buttonAdd">
          <button className="addBtn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
