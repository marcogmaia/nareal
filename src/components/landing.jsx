import React, { Component } from "react";
// import images from "../../epubs/covers";
// const images = require.context("../epubs/covers/", false, /\.(png|jpe?g|svg)$/);

// const mylist = images.map(img => <li>images</li>);
// const mlist = [1, 2, 3, 4];
// const litem = mlist.map(item => <li>{item}</li>);

class Landing extends Component {
  imgfolder = "../epubs/covers/";
  state = {
    image: ["gatsby.jpg", "got.jpg"]
  };

  render() {
    return (
      <div>
        <div className="album text-muted">
          <div className="row">
            <div className="card">
              <img
                height="500px"
                src={require("../epubs/covers/gatsby.jpg")}
                alt=""
              />
              <p className="card-text text-center">mas que coisa doido</p>
            </div>
            <div className="card">
              <img
                height="500px"
                src={require("../epubs/covers/got.jpg")}
                alt=""
              />
            </div>
            <div className="card">
              <img
                height="500px"
                src={require("../epubs/covers/harryPotter.jpg")}
                alt=""
              />
              <div className="card" />
            </div>
            <div>
              <img
                height="500px"
                src={require("../epubs/covers/stephenKing.jpg")}
                alt=""
              />
            </div>
          </div>
          {/* <ul>
          <li>
            <img src={require("../epubs/covers/harryPotter.jpg")} alt="" />
          </li>
          <li>
            <img src={require("../epubs/covers/stephenKing.jpg")} alt="" />
          </li>
        </ul> */}
          <div className="container">
            <h1>pronto agora vai</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
