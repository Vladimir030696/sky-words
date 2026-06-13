import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopUser from './components/PopUser/PopUser'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import './App.css'





function App() {
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App


    
    







