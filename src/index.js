import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App';
 
import About from './components/About';
import Musics from './components/Musics';
import Contact from './components/Contact';
import Music from './components/Music';
import NotFound from './components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Musics' element={<Musics/>}>
        <Route index element={
          <main className='text-center text-info'>choose you'r Playlist </main>
        }/>
          <Route path={':MusicId'} element={<Music/>} />
        </Route>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

