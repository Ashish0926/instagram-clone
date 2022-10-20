import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const publishPost = () => {
    let config = {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTEyOWQ2YjUwNTY5N2FiZTk2MjgyOSIsImlhdCI6MTY2NjI5Mzg0MH0.Idx-bq14BMvnd9D1i9D1xbu69_JCdA7X8Gvnlv1gDPs",
      },
    };

    axios
      .post(
        "http://localhost:3000/createPost",
        {
          title: title,
          body: caption,
          picture: url,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "dcvqxc3al");

    axios
      .post("https://api.cloudinary.com/v1_1/dcvqxc3al/upload", data)
      .then((res) => {
        setUrl(res.data.secure_url);
        publishPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-field"
      style={{
        margin: "10px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="caption"
        value={caption}
        onChange={(e) => {
          setCaption(e.target.value);
        }}
      />
      <div className="file-field input-field">
        <div className="btn black">
          <span className="login-btn">Upload Image</span>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <div
        className="btn-large black login-btn"
        style={{ marginTop: "40px" }}
        onClick={postDetails}
      >
        Submit Post
      </div>
    </div>
  );
};

export default CreatePost;
