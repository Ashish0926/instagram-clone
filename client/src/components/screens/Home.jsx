import React from "react";

const Home = () => {
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
      <div className="card home-card">
        <h6 style={{ marginLeft: "15px", fontFamily: "roboto" }}>
          Ashish Gupta
        </h6>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content input-field">
        <div>
            <i class="material-icons">favorite_border</i>
          </div>
          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h6 style={{ marginLeft: "15px", fontFamily: "roboto" }} >Ashish Gupta</h6>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content input-field">
          <div>
            <i class="material-icons">favorite_border</i>
          </div>

          <h6>title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
