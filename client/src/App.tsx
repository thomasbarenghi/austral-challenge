import { setupIonicReact } from '@ionic/react'
import { type FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/Home/Page'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import './index.css'
import { Footer, Header } from './components'
import SWRProvider from './context/providers/swr.provider'

setupIonicReact()

const App: FC = () => (
  <BrowserRouter>
    <SWRProvider>
      <Header />
      <Route path='/' component={HomePage} />
      <Footer />
    </SWRProvider>
  </BrowserRouter>
)

export default App
