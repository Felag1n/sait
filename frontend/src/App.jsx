import Header from "./components/Header/Header";
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from "./components/Footer/Footer";
import Charts from "./pages/Charts";
import Suport from "./pages/Suport";
import FAQ from "./pages/FAQ";
import Uslugi from "./pages/Uslugi";
import Contacts from "./pages/contacts";
import Izbranoe from "./pages/Izbranoe";
import BOs from "./pages/BOs";
import alternative from "./pages/alternative";
import electronic from "./pages/electronic";
import O_nas from "./pages/O_nas";
import Music from "./pages/Music";
import hip_hop from "./pages/hip_hop";
import jazz from "./pages/jazz";
import rap from "./pages/rap";
import rnb from "./pages/rnb";
import pop from "./pages/pop";
function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/suport" element={<Suport />}/>
          <Route path="/FAQ" element={<FAQ />}/>
          <Route path="/Uslugi" element={<Uslugi />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/Izbranoe" element={<Izbranoe />}/>
          <Route path="/electronic" element={<electronic/>}/>
          <Route path="/hip_hop" element={<hip_hop/>}/>
          <Route path="/jazz" element={<jazz/>}/>
          <Route path="/pop" element={<pop/>}/>
          <Route path="/punk" element={<punk/>}/>
          <Route path="/rap" element={<rap/>}/>
          <Route path="/rnb" element={<rnb/>}/>
          <Route path="/rock" element={<rock/>}/>
          <Route path="/O_nas" element={<O_nas/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/BOs" element={<BOs/>}/>
          <Route path="/alternative" element={<alternative/>}/>
          <Route path="/pop" element={<pop/>}/>
          
                  {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
    </Routes>
    
  );
  
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App