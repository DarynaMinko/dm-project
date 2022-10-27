import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";

export default function Films() {
  const [info, setInfo] = useState([]);
  const [key, setKey] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/films/").then((res) => {
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
        columnWidth: "100%",
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

          {info.map((film, index) => (
            <tr key={v4()} style={{ background: "green" }}>
              <td> {film.title} </td>
              <td> {film.episode_id} </td>
              <td> {film.opening_crawl} </td>
              <td> {film.director} </td>
              <td> {film.producer} </td>
              <td> {film.release_date} </td>
              <td>
                {" "}
                {film.characters.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td>
                {" "}
                {film.planets.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td>
                {" "}
                {film.starships.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td>
                {" "}
                {film.vehicles.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td>
                {" "}
                {film.species.map((item, index) => (
                  <option key={v4()}> {item} </option>
                ))}
              </td>
              <td> {film.created} </td>
              <td> {film.edited} </td>
              <td> {film.url} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
