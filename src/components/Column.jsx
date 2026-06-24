import Card from './Card';
import { Title } from './Title.styles';

function Column({ status, cards }) {
  
   const colors = {
    'Новое': '#D9B6FF',      
    'В процессе': '#FFB53D', 
    'Выучено': '#BCEC30'     
  };

  const color = colors[status] || '#95a5a6';

  return (
    <div className="main__column column">
      <div className="column__title">
        <Title color={color}>{status}</Title>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
             color={color} 
          />
        ))}
      </div>
    </div>
  );
}

export default Column;