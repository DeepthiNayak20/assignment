import "./common.css";

const Items = (props: any) => {
  return (
    <div>
      <div className="itemContainer">
        <div className="displayUsername">{props.userName}</div>
        <div className="btnDel">
          <button className="deleteButton">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
