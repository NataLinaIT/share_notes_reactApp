import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("");

  let sendData = (obj) => {
    setFormClass("hide");
    setLineClass("");
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + "/" + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === "") {
      alert("Enter your note");
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div className="container">
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="">Enter your note</label>
        <textarea name="note" id="note" placeholder="Add text here" className="form-control"></textarea>
        <button type="submit" className="btn btn-primary btn-md">Create Note</button>
      </form>
      <div className={lineClass}>
        <div className="url_info">{url}</div>
        <div>
          <button
            onClick={function () {
              window.location.reload();
            }}
            className="btn btn-primary btn-md"
          >
            Create new note
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
