import "./common.css";
import { useDispatch } from "react-redux";
import { deleteDataAsync } from "../redux/dataSlice";

const Items = (props: any) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteDataAsync({
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
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
