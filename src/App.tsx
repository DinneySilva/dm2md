import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Videos from './pages/Videos';
import Music from './pages/Music';
import Agenda from './pages/Agenda';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import ImageEdit from './pages/ImageEdit';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/music" replace />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/music" element={<Music />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/library" element={<Library />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/image-edit" element={<ImageEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
