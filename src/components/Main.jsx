import Column from "./Column";



function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Новое" />
            <Column title="В процессе" />
            <Column title="Выучено" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;