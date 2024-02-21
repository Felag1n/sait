import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return(
    <>
      <Header />
      <body>
      <h1 style={{ textAlign: "center", color: "white" }}>Музыка</h1>
      <h2 style={{ textAlign: "center", color: "white" }}>Обзор</h2>
      <h3 style={{ textAlign: "center", color: "white" }}>Интересные теги</h3>
      <div>

      </div>
      <div className='group'>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
      </div>
      <h4 style={{ textAlign: "center", color: "white" }}>Последниие релизы</h4>
      
      <div className='group'>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
        <div className='box'>Lorem.</div>
      </div>
      </body>
      <Footer/>
    </>
    
  );
  
}

export default App