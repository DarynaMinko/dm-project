import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";

export default function Planets() {
  const [info, setInfo] = useState([]);
  const [key, setKey] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/planets/").then((res) => {
      setInfo(res.data.results);
      setKey(Object.keys(res.data.results[0]));
      //console.log(res.data.results[0].films);
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
          <tr style={{ background: "pink", width: "100" }}>
            {key.map((item, index) => (
             <td key={v4()}>{item.toUpperCase()}</td>
            ))}
          </tr>
          {info.map((planet, index) => (
            <tr key={v4()} style={{ background: "gray", width: "100" }}>
              <td> {planet.name} </td>
              <td> {planet.rotation_period} </td>
              <td> {planet.orbital_period} </td>
              <td> {planet.diameter} </td>
              <td> {planet.climate} </td>
              <td> {planet.gravity} </td>
              <td> {planet.terrain} </td>
              <td> {planet.surface_water} </td>
              <td> {planet.population} </td>
              <td>
                {" "}
                {planet.films.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td> {planet.created} </td>
              <td> {planet.edited} </td>
              <td> {planet.url} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
