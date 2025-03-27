
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {


  return (
    <>
    <div >
      <div className='p-5 md:px-[15%]'>
        <Navbar/>
        <Home/>
      </div>
      <About/>
     
    </div>
     
    </>
  )
}

export default App
