import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card
          theme="orange"
          category="Web Design"
          title="Название задачи"
          date="30.10.23"
        />
        <Card
          theme="green"
          category="Research"
          title="Название задачи"
          date="30.10.23"
        />
        <Card
          theme="purple"
          category="Copywriting"
          title="Название задачи"
          date="30.10.23"
        />
        <Card
          theme="orange"
          category="Web Design"
          title="Название задачи"
          date="30.10.23"
        />
      </div>
    </div>
  );
}

export default Column;