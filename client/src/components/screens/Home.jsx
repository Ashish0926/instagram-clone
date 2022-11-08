import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    //console.log(token);
    axios
      .get("http://localhost:3000/allpost", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        //console.log(res.data.posts);
        setData(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {data.map((item) => {
        //console.log(item.photo);
        return (
          <div className="card home-card" key={item}>
            <h6 style={{ marginLeft: "15px", fontFamily: "roboto" }}>
              {item.postedBy.name}
            </h6>
            <div className="card-image">
              <img src={item.photo} />
            </div>
            <div className="card-content input-field">
              <div>
                <i class="material-icons">favorite_border</i>
              </div>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
