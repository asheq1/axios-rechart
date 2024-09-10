import './App.css'
import Axios from './components/Axios/Axios'
import LineChart from './components/LineChart/LineChart'
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
      <LineChart />
      <Axios />
    </>
  )
}

export default App
