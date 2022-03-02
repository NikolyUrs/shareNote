function Main() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="text">
          <ul className="row button-list">
            <li className="col-6 text-center"><a className="btn btn-primary" href="/create"> Создать Note</a></li>
            <li className="col-6 text-center"><a className="btn btn-primary" href="/note">Смотреть Note</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <p><b>ShareNote</b> - сервис для обмена заметками. Создайти заметку и ваш друг сможет ее посмотреть. После просмотра заметка будет удалена(или поистечению 15 минут с момента просмотра) </p>
          <p>Как сделать заметку? </p>
          <ul>
            <li>Пройдите по ссылке</li>
            <li>Вставьте текст и нажмите Create</li>
            <li>Отправьте сгенерированный адрес другу!</li>
          </ul>
          <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;

<a className="btn btn-primary" href="/note">Смотреть Note</a>

