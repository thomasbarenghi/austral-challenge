import { setupIonicReact } from '@ionic/react'
import { type FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/Home/Page'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css'
// import '@ionic/react/css/structure.css'
// import '@ionic/react/css/typography.css'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/services/apollo.service'
import { Footer, Header } from './components'

setupIonicReact()

const App: FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Header />
      <Route path='/' component={HomePage} />
      <Footer />
    </ApolloProvider>
  </BrowserRouter>
)

export default App
