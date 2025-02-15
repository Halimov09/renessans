import { Route, Routes } from 'react-router-dom';
import {Main, Navbar} from '../index';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
