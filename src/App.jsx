import './App.css'
import Nav from './components/Nav/Nav'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <h1 className='text-7xl bg-rose-400'>Vite + React</h1>
      <PriceOptions />
    </>
  )
}

export default App
