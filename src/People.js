import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";

export default function People() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/people/").then((res) => {
      setInfo(res.data.results);
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
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
            <th>Birth year</th>
            <th>Gender</th>
            <th>Homeworld</th>
            <th>Films</th>
            <th>Species</th>
            <th>Vehicles</th>
            <th>Starships</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
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
