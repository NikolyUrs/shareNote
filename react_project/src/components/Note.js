import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import evn from '../evn.json';




// http://localhost:3000/note/klf7ecq4k18w610yo85j3cr4




function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');



  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(evn.backUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "url": noteURL })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          if (response.result) {
            setNoteText(response.note)
            setLineClass('')
            setFormClass('hide')
            setErrorClass('hide')
          } else if (!response.result) {
            setLineClass("hide")
            setFormClass('hide')
            setErrorClass('')
          }
        })

    } else {
      setLineClass('hide')
      setFormClass('')
      setErrorClass('hide')
    }
  }
    , [])

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поле')
      return false
    }
    noteURL = url;
    window.location.href = evn.frontUrl + '/' + url;
  }
  function searchNote() {
    window.location.href = evn.frontUrl
  }


  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
          <div className={lineClass}>
            <div className="alert alert-success" role="alert">
              <h4>Note: {noteURL}</h4>
              <div>{noteText}</div>
              <hr />
              <p className="mb-0">Внимание! Скопируйте заметку. После показа заметка будет удалена!</p>
            </div>
            <div className="d-grid gap-2">
              <button onClick={searchNote} className="btn btn-primary">Искать другой note</button>
            </div>
          </div>
          <div className={errorClass}>
            <div className="text-center">
            <p>Произошла ошибка. Такой кеш не найден</p>
            <button onClick={searchNote} className="btn btn-primary">Искать другой note</button>
            </div>
          </div>
          <div className={formClass}>
            <form action="" onSubmit={getNote}>
              <div className="form-group">
                <label htmlFor="url" className="form-label">Введите hash заметки</label>
                <input type="text" name="url" id="url" className="form-control" />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary mt-5" > Искать Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
