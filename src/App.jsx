import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Chat from './components/Chat'
import Todo from './components/Todo'
import Contact from './components/Contact'
import Cv from './components/Cv'

export default function App() {

  return (
    <div className='app-container'>
      <nav className='menu'>
        <Link to='/'>Home</Link> {''}
        <Link to='/chat'>Chat</Link>{''}
        <Link to='/todo'>Todo</Link>{''}
        <Link to='/contact'>Contact</Link>{''}
        <Link to='/cv'>CV</Link>{''}
      </nav>
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cv' element={<Cv />} />
        </Routes>
      </div>
    </div>
  )
}
