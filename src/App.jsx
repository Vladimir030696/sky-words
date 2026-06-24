import { useState, useEffect } from 'react';  
import Header from './components/Header';
import PopUser from './components/PopUser';
import PopNewCard from './components/PopNewCard';
import PopBrowse from './components/PopBrowse';
import Column from './components/Column';
import { cards } from './data';
import './App.css';



function App() {
  const [loading, setLoading] = useState(true);  
  const [cardsData, setCardsData] = useState([]);
  
  const columns = [
    "Новое",
    "В процессе",
    "Выучено"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsData(cards);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Если идёт загрузка — показываем сообщение
  if (loading) {
    return (
      <div className="wrapper">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Данные загружаются...</p>
        </div>
      </div>
    );
  }

  // Если загрузка закончена — показываем карточки
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />



      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
             
              {columns.map((columnStatus) => (
                <Column 
                  key={columnStatus} 
                  status={columnStatus} 
                  cards={cardsData.filter(card => card.status === columnStatus)}  // ← cardsData, а не cards
                />
              ))}
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
// Home work
