import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './context/Context';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Article from './pages/article/Article';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Create from './pages/create/Create';
import Settings from './pages/settings/Settings';

function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={ <Posts />} />
        <Route path='/posts/:articleID' element={ <Article />} />
        <Route path='/create' element={ user ? <Create /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;