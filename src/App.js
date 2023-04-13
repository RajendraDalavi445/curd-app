import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './componants/Create';
import Read from './componants/Read';
import Edit from './componants/Edit';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Read />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit" element={<Edit />}></Route>
     </Routes>
    </>
  );
}

export default App;
