import React from "react";

const CreatePost = () => {
  return (
    <div className="card input-field"
    style={{
        margin: "10px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
    }}>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="caption" />
      <div className="file-field input-field">
        <div className="btn black">
          <span className="login-btn">Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <div className="btn-large black login-btn" style={{marginTop: "40px"}}>Submit Post</div>
    </div>
  );
};

export default CreatePost;
