import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";

export default function People() {
  const [info, setInfo] = useState([]);
  const [key, setKey] = useState([]);
   
  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/people/").then((res) => {
      setInfo(res.data.results);
      setKey(Object.keys(res.data.results[0]));
      //console.log(res.data.results);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        margin: "10px 30 px",
        gap: 10,
      }}
    >
      <div>
        <p>
          <a href="/">Back</a>
        </p>
      </div>
      <table>
        <tbody>
        <tr style={{ background: "lightBlue", width: "100" }}>
          {key.map((item, index) => (
            <td key={v4()}>{item.toUpperCase()}</td>
          ))}
          </tr>
          {info.map((user, index) => (
            <tr key={v4()} style={{ background: "pink", width: "100" }}>
              <td> {user.name} </td>
              <td> {user.height} </td>
              <td> {user.mass} </td>
              <td> {user.hair_color} </td>
              <td> {user.skin_color} </td>
              <td> {user.eye_color} </td>
              <td> {user.birth_year} </td>
              <td> {user.gender} </td>
              <td> {user.homeworld} </td>
              <td>
                {" "}
                {user.films.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}{" "}
              </td>
              <td>
                {" "}
                {user.species.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}{" "}
              </td>
              <td> {user.vehicles} </td>
              <td>
                {" "}
                {user.starships.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}{" "}
              </td>
              <td> {user.created} </td>
              <td> {user.edited} </td>
              <td> {user.url} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
