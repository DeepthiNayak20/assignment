import "./common.css";
import Items from "./items";
import { useSelector } from "react-redux";

const ListItems = () => {
  const listData = useSelector((state: any) => state.counter);

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
