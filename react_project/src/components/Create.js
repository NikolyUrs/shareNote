import React, { useState } from "react";
import evn from "../evn.json"



function Create() {
  const [url, setUrl] = useState('');
  const [formClass, setFromClass] = useState('');
  const [lineClass, setLineClass] = useState('hide');

  function sendData(obj) {
    setFromClass('hide');
    setLineClass('');

    fetch(evn.backUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.result) {
          setUrl(evn.frontUrl + '/' + response.url)
        }
      })
  }


  function onClickHandler(event) {
    event.preventDefault();
    console.log(event.target.elements.note.value)
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поле')
      return false;
    }
    sendData({ "note": note })
  }


  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
            <form onSubmit={onClickHandler} className={formClass}>
              <div className="form-group"> 
              <label htmlFor="" className="form-label">Введите заметку</label>
              <textarea name="note" id="note" defaultValue='test' className="form-control"></textarea>
              <div className="form-text"><p><b>Внимание!</b> Максимальная длина заметки 1000 символов.</p></div>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary mt-5 ">Создать</button>
              </div>
            </form>
          <div className={lineClass}>
            <div className="alert alert-primary" role="alert">{url}</div>
            <p>Скопируйте URL и передайте адресату. Внимание! Посмотреть заметку можно один раз!</p>
            <div className="d-grid gap-2">
            <button onClick={function () { window.location.reload() }} className="btn btn-primary">Создать новую заметку</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Create;
