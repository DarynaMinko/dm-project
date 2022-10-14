import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";
export default function Planets() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/planets/").then((res) => {
      setInfo(res.data.results);
      console.log(res.data.results[0].films);
    });
    //.catch((err) => console.log("error"));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <a href="/">Back</a>

      <table>
        <tbody>
          <tr
            style={{
              backgroundColor: "#D6EEEE",
              padding: "8px",
              textAlign: "left",
              BorderBottom: "1px solid #DDD",
              border: "1px solid black",
              fontFamily: "Helvetica"
            }}
          >
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>

          {info &&
            info
              .map((planet) => <div key={v4()}>{planet.name}</div>)
              .map((element, index) => (
                <tr>
                  <td>{element}</td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.rotation_period}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.orbital_period}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.diameter}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.climate}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.gravity}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.Terrain}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.surface_water}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.population}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.residents}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.films}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.created}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((planet) => (
                        <div key={v4()}>{planet.edited}</div>
                      ))[index]}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
