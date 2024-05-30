import Header from "./components/Header/Header";
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginRegPage from './pages/LoginRegPage'
import FramePage from './pages/FramePage'
import Footer from "./components/Footer/Footer";
import Charts from "./pages/Charts";
import CardFrame from "./components/CardFrame/CardFrame"
import FAQ from "./pages/FAQ";
import Uslugi from "./pages/Uslugi";
import Contacts from "./pages/Contacts";
import Izbranoe from "./pages/Izbranoe";
import About from "./pages/About";
import Player from "./components/Player/Player";
import { ThemeProvider } from 'react-bootstrap';
import LoginForm from "./components/LoginIn/LoginIn";
import RegistrationForm from "./components/Reg/Reg";

// import "./components/Reg/styles/style.css"

import { usePlayerStore } from './store/playerStore'
import { SongPage } from "./pages/SongPage";
import Ganre from "./pages/Ganre";
import AlbumPage from "./pages/AlbumPage";

function App() {
  return(
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/charts" element={<Charts />} />
          
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/Uslugi" element={<Uslugi />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/Izbranoe" element={<Izbranoe />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/page" element={<FramePage/>}/>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegistrationForm />}></Route>
            <Route path="/song/:id" element={<SongPage />}></Route>
            <Route path="/ganre/:id" element={<Ganre />}></Route>
            <Route path="/album/:id" element={<AlbumPage />}></Route>

                    {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
      </Routes>
    </ThemeProvider>
    
  );
}

function Layout() {
  const songUrl = usePlayerStore((state) => state.songUrl)

  const isPlayingNow = songUrl !== null

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto', minHeight: '100svh' }}>
      <Header />
      <div>

         {/* <CardFrame/>  */}
        <Outlet />

      </div>
      { isPlayingNow && (
        <Player
          player={{ songUrl }}
        />
      )}
      <Footer/>
    </div>
  )
}

export default App