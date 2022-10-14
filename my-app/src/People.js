import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";

export default function People() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    Axios.get("https://swapi.dev/api/people/").then((res) => {
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
              textAlign: "left",
              BorderBottom: "1px solid #DDD",
              border: "1px solid black",
              fontFamily: "Helvetica"
            }}
          >
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
            <th>Birth</th>
            <th>Gender</th>
            <th>Films</th>
            <th>Homeworld</th>
            <th>Species</th>
            <th>Vehicles</th>
            <th>Starships</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>

          {info &&
            info
              .map((user) => <div key={v4()}> {user.name}</div>)
              .map((element, index) => (
                <tr>
                  <td>{element}</td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}> {user.height}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}> {user.mass}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}> {user.hair_color}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}>{user.skin_color}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}> {user.eye_color}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}>{user.birth_year}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.gender}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}>{user.homeworld}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.films}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.species}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.vehicles}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => (
                        <div key={v4()}>{user.starships}</div>
                      ))[index]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.created}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.edited}</div>)[
                        index
                      ]}
                  </td>
                  <td style={{ border: "1px solid gray" }}>
                    {info &&
                      info.map((user) => <div key={v4()}>{user.url}</div>)[
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
