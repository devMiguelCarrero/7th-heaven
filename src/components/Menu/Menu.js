import React from "react";
import "./Menu.scss";
import Cursor from "../../assets/img/FF7Cursor.png";

const sevenMenu = (props) => {
  const data = [
    { id: "1", title: "Item" },
    { id: "2", title: "Magic" },
    { id: "3", title: "Materia" },
    { id: "4", title: "Equip" },
    { id: "5", title: "Status" },
    { id: "6", title: "Order" },
    { id: "7", title: "Limit" },
    { id: "8", title: "Config" },
    { id: "space", title: "Item" },
    { id: "9", title: "Save" },
  ];

  return (
    <ul className="seven-vertical-menu">
      {data.map((item, index) => {
        if (item.id === "space") {
          return <li key={`space-${index}`}></li>;
        }
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};
export default sevenMenu;
