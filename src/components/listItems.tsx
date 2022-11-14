import "./common.css";
import Items from "./items";

const ListItems = () => {
  const listData = [
    { id: 1, userName: "aaa" },
    { id: 2, userName: "bbb" },
    { id: 3, userName: "ccc" },
    { id: 4, userName: "ddd" },
    { id: 5, userName: "eee" },
  ];
  return (
    <div>
      {listData.map((item: any) => (
        <Items id={item.id} userName={item.userName} />
      ))}
    </div>
  );
};

export default ListItems;
