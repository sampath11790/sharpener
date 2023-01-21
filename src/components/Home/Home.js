import React, { useState } from "react";
import homecls from "./Home.module.css";

import book1 from "./../../asserts/book1.jpg";
import book2 from "./../../asserts/book2.jpg";
import book3 from "./../../asserts/book3.jpg";
import book4 from "./../../asserts/book4.jpg";
// import book1 from "./../../asserts/book1.jpg"
let books = [
  {
    id: 1,
    name: "Pro Git",
    quantity: 1,
    author: "SCOTT CHACON and BEN STRAUB",
    url: book1,
  },
  {
    id: 2,
    name: "THE WEB APPLICATION HACKER'S HANDBOOK",
    quantity: 1,
    author: "DAFYDD STUTTARD AND MARCUS PINTO",
    url: book2,
  },
  {
    id: 3,
    name: "THE MYTHICAL MAN-MONTH",
    quantity: 1,
    author: " FREDERICK BROOKS",
    url: book3,
  },
  {
    id: 4,
    name: "CLEAN CODE",
    quantity: 1,
    author: "ROBERT C. MARTIN",
    url: book4,
  },
];
const HomeElement = () => {
  const [Books, setBooks] = useState(books);

  // const increment = (id) => {
  //   let newlist = Books.map((item) => {
  //     if (item.id === Number(id)) {
  //       item.quantity += 1;
  //     }
  //     return item;
  //   });
  //   setBooks(newlist);
  // };
  const buyHandler = (item) => {
    console.log(item);
  };
  return (
    <div className={homecls.container}>
      <ul className={homecls.uicontainer}>
        {Books.map((item) => (
          <li key={item.id}>
            <div className={homecls.image}>
              <img src={item.url}></img>
            </div>

            <div className={homecls.other}>
              <p>{item.name}</p>

              <p> Author: {item.author}</p>

              <div className={homecls.btncontainer}>
                {/* <button>-</button> */}
                <span>{item.quantity}</span>
                {/* <button onClick={() => increment(item.id)}>+</button> */}
              </div>
              <div className={homecls.btnbuy}>
                <button onClick={() => buyHandler(item)}>AddCart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeElement;
