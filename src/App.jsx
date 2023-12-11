import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { PageHeader } from './layout/PageHeader/PageHeader'
import { PageHome } from './layout/PageHome/PageHome'
import { PagePlay } from './layout/PagePlay/PagePlay'
import { PageLearn } from './layout/PageLearn/PageLearn'
import { PageEnjoy } from './layout/PageEnjoy/PageEnjoy'
import { PageFitness } from './layout/PageFitness/PageFitness'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PageFooter } from './layout/PageFooter/PageFooter'



function App() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
        <Routes>
          <Route path="/" element={<PageHome></PageHome>} />
          <Route path="/play/:id" element={<PagePlay></PagePlay>} />
          <Route path="/enjoy" element={<PageEnjoy></PageEnjoy>} />
          <Route path="/learn" element={<PageLearn></PageLearn>} />
          <Route path="/fitness" element={<PageFitness></PageFitness>} />
        </Routes>
      <PageFooter />
    </BrowserRouter>
  )
}

export default App
