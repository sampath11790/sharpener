import React from "react";
import { useHistory } from "react-router-dom";
import profilecls from "./Profile.module.css";

const Profile = () => {
  const history = useHistory();
  return (
    <div className={profilecls.container}>
      <section className={profilecls.main}>
        <div className={profilecls.info}>
          <h3>Details</h3>
          <p></p>
          <p>
            <span>Name:</span> Sampath
          </p>
          <p>
            <span>age:</span>32
          </p>
          <p>
            <span>Education:</span>Diploma in Mchanical engineering
          </p>
          <p>
            <span>place :</span>Bangalore
          </p>
          <p>
            <span>Email:</span>sampath@gamil.com{" "}
          </p>
          <p>
            <span>phone:</span>9500587444
          </p>

          <div>
            <button onClick={() => history.replace("/update")}>
              Update Profile
            </button>
          </div>
        </div>
        <div className={profilecls.photo}>
          {/* //photo */}
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            alt=""
          ></img>
        </div>
        <div className={profilecls.about}>
          {/* about */}
          <h3>About</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
