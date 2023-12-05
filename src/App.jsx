import './App.css'
import { PageHeader } from './components/PageHeader/PageHeader'
import { PageHome } from './components/PageHome/PageHome'
import { PageHero } from './components/PageHero/PageHero'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <PageHeader></PageHeader>
      <PageHero></PageHero>
      <PageHome></PageHome>
    </>
  )
}

export default App
