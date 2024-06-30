import React from "react";
import "./MyProjects.css";
import myproject_data from "../../assets/myproject_data";

function MyProjects() {
  return (
    <div id="projects" className="myprojects">
      <div className="myproject-title">
        <h1>My latest Projects</h1>
      </div>
      <div className="project-container">
        {myproject_data.map((item, i) => {
          return <img key={i} src={item.p_img} />;
        })}
      </div>
    </div>
  );
}

export default MyProjects;
