import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [info, setInfo] = useState("");

  const fetchData = () => {
    Axios.get("https://swapi.dev/api/people")
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => console.lof("error"));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-page-style">
      <Link to="/People">
        <div className="wrapper-button-1">
          <button onClick={fetchData} className="People-btn">
            People
          </button>
          <h2> {info.name} </h2>
        </div>
      </Link>

      <Link to="/Planets">
        <div className="wrapper-button-1">
          <button onClick={fetchData} className="People-btn">
            Planets
          </button>
          <h2> {info.name} </h2>
        </div>
      </Link>

      <Link to="/Films">
        <div className="wrapper-button-1">
          <button onClick={fetchData} className="People-btn">
            Films
          </button>
          <h2> {info.name} </h2>
        </div>
      </Link>
    </div>
  );
};
