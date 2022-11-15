import "./common.css";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/dataSlice";

const Items = (props: any) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteData({
        id: props.id,
      })
    );
  };
  return (
    <div>
      <div className="itemContainer">
        <div className="displayUsername">{props.userName}</div>
        <div className="btnDel">
          <button className="deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
