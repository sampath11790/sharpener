import React from "react";
import welcomecls from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={welcomecls.container}>
      <div className={welcomecls.main}>
        <p>Our Clients Are First Priority</p>
        <h2>
          Welcome <span>To</span> sharpener
        </h2>
        <div>
          <p>______________</p>
        </div>
        <p className={welcomecls.info}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={welcomecls.btn}>
          <button className={welcomecls.btn1}>Get Started Now</button>
          <button className={welcomecls.btn2}>Learn more</button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
