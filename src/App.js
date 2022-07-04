import { FiberPin } from '@mui/icons-material';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail.js';
import Home from "./pages/Home.js";
import NavBar from "./components/NavBar.js";
import Footer from './components/Footer.js';

function App() {
  return (
   <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
