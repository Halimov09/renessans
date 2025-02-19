import { Route, Routes } from 'react-router-dom';
import {Kurs, Main, Navbar} from '../index';

function App() {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
