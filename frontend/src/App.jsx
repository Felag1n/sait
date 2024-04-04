import Header from "./components/Header/Header";
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginRegPage from './pages/LoginRegPage'
import FramePage from './pages/FramePage'
import Footer from "./components/Footer/Footer";
import Charts from "./pages/Charts";
import CardFrame from "./components/CardFrame/CardFrame"
import Suport from "./pages/Suport";
import FAQ from "./pages/FAQ";
import Uslugi from "./pages/Uslugi";
import Contacts from "./pages/Contacts";
import Izbranoe from "./pages/Izbranoe";
import BOs from "./pages/BOs";
import Alternative from "./pages/Alternative";
import Electronic from "./pages/Electronic";
import About from "./pages/About";
import Music from "./pages/Music";
import HipHop from "./pages/HipHop";
import Jazz from "./pages/Jazz";
import Rap from "./pages/Rap";
import Rnb from "./pages/Rnb";
import Pop from "./pages/Pop";
import Rock from "./pages/Rock";
import Punk from "./pages/Punk";
import Player from "./components/Player/Player";
import { ThemeProvider } from 'react-bootstrap';

import LoginForm from "./components/LoginIn/LoginIn";

function App() {
  return(
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/suport" element={<Suport />}/>
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/Uslugi" element={<Uslugi />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/Izbranoe" element={<Izbranoe />}/>
            <Route path="/electronic" element={<Electronic/>}/>
            <Route path="/hiphop" element={<HipHop/>}/>
            <Route path="/jazz" element={<Jazz/>}/>
            <Route path="/pop" element={<Pop/>}/>
            <Route path="/punk" element={<Punk/>}/>
            <Route path="/rap" element={<Rap/>}/>
            <Route path="/rnb" element={<Rnb/>}/>
            <Route path="/rock" element={<Rock/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/BOs" element={<BOs/>}/>
            <Route path="/alternative" element={<Alternative/>}/>
            <Route path="/pop" element={<Pop/>}/>
            <Route path="/page" element={<FramePage/>}/>
            <Route path="/login" element={<LoginForm />}></Route>
            
                    {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
            
      </Routes>
    </ThemeProvider>
    
  );
}

function Layout() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto', minHeight: '100svh' }}>
      <Header />
      <div>

         {/* <CardFrame/>  */}
        {/* <Player player={{ songUrl: '/Manu_Chao_-_Me_gustas_tu_48056032.mp3' }}/> */}
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App