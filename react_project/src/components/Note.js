import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import env from "../env.json";

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("hide");
  const [errorClass, setErrorClass] = useState("hide");

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass("");
            setFormClass("hide");
            setErrorClass("hide");
          } else if (!response.result) {
            setLineClass("hide");
            setFormClass("hide");
            setErrorClass("");
          }
        });
    } else {
      setLineClass("hide");
      setFormClass("");
      setErrorClass("hide");
    }
  }, [noteURL]);

  let getNote = (event) => {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === "") {
      alert("Заполните поля");
      return false;
    }
    noteURL = url;
    window.location.href = env.url + "/" + url;
  };

  let searchNote = () => {
    window.location.href = env.url;
  };

  return (
    <div className="container">
      <div className={lineClass}>
        <h1>Note:</h1>
        <div>{noteText}</div>
        <div>
          <button onClick={searchNote} className="btn btn-primary">
            Watch another Note
          </button>
        </div>
      </div>
      <div className={errorClass}>
        <p>No such note found</p>
      </div>
      <div className={formClass}>
        <form onSubmit={getNote}>
          <label htmlFor="url">Enter note hash</label>
          <input type="text" name="url" id="url" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Search a Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
