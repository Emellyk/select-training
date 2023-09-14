import { Header } from './components/Header/index.jsx'
import { Main } from './components/Main/index.jsx'
import { Planos } from './components/Plans/index.jsx'
import { Navbar } from './components/navbar/index.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Planos />
    </div>
  )
}

export default App
