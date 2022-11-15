import "./common.css";
import Items from "./items";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataAsync } from "../redux/dataSlice";

const ListItems = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state: any) => state.counter);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <div>
      {listData.map((item: any, i: any) => (
        <div key={i}>
          {" "}
          <Items id={item.id} userName={item.userName} />
        </div>
      ))}
    </div>
  );
};

export default ListItems;
