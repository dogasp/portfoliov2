import { Container } from '@mui/material'
import { Header } from './features/Header/Header'
import { Home } from './features/Home/Home'
import { Projects } from './features/Projects/Projects'
import { Profile } from './features/Profile/Profile'
import { Contact } from './features/Contact/Contact'
import './style.css'

function App() {

  return (
    <Container sx={{ p: { sm: 0, xs: 0 }, mx: 0, flexGrow: 1}} maxWidth={false}>
      <Header />

      <div id="Home">
        <Home />
      </div>

      <div id="Profile"><Profile /></div>

      <div id="Projects"><Projects /></div>

      <div id="Contact"><Contact /></div>

    </Container>
  )
}

export default App
