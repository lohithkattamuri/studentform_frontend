import './App.css';
import Nav from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Createstudent from './components/createstudent';
import Studentlist from './components/studentlist';
import EditStudent from './components/editStudent';
function App() {
  return (
    
    <div  className='bg-warning'>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/'></Route>
        <Route path='/create-student' element={<Createstudent />}></Route>
        <Route path='/student-list' element={<Studentlist />}></Route>
        <Route path='/edit-student/:id' element={<EditStudent />}></Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
