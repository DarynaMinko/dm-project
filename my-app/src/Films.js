import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";
export default function Films() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/films/").then((res) => {
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
            <th>Title</th>
            <th>Episode id</th>
            <th>Opening crawl</th>
            <th>Director</th>
            <th>Producer</th>
            <th>Release date</th>
            <th>Characters</th>
            <th>Planets</th>
            <th>Starships</th>
            <th>Vehicles</th>
            <th>Species</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>

          {info &&
            info
              .map((films) => (
                <div styles={{ colWidth: "relative_length" }} key={v4()}>
                  {films.title}
                </div>
              ))
              .map((element, index) => (
                <tr>
                  <td>{element}</td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.episode_id}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.opening_crawl}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.director}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.producer}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.release_date}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.characters}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.starships}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.vehicles}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.species}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => (
                        <div key={v4()}>{films.created}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => <div key={v4()}>{films.edited}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((films) => <div key={v4()}>{films.url}</div>)[
                        index
                      ]}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
