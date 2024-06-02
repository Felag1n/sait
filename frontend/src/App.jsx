import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Player from './components/Player/Player';
import { ThemeProvider } from 'react-bootstrap';
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegPage from './pages/LoginRegPage';
import Charts from './pages/Charts';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import About from './pages/About';
import LoginForm from './components/LoginIn/LoginIn';
import RegistrationForm from './components/Reg/Reg';
import { usePlayerStore } from './store/playerStore';
import { SongPage }from './pages/SongPage'; 
import Ganre from './pages/Ganre';
import AlbumPage from './pages/AlbumPage';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="charts" element={<Charts />} />
                    <Route path="FAQ" element={<FAQ />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" element={<RegistrationForm />} />
                    <Route path="song/:id" element={<SongPage />} />
                    <Route path="ganre/:id" element={<Ganre />} />
                    <Route path="album/:id" element={<AlbumPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

function Layout() {
    const songUrl = usePlayerStore((state) => state.songUrl);
    const isPlayingNow = songUrl !== null;

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
            <Header />
            <div>
                <Outlet />
            </div>
            {isPlayingNow && <Player songUrl={songUrl} />}
            <Footer />
        </div>
    );
}

export default App;

