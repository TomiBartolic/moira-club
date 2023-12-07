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
import { PageAction } from './layout/PageActionGames/PageAction'

function App() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
        <Routes>
          <Route path="/" element={<PageHome></PageHome>} />
          <Route path="/play" element={<PagePlay></PagePlay>} />
          <Route path="/enjoy" element={<PageEnjoy></PageEnjoy>} />
          <Route path="/learn" element={<PageLearn></PageLearn>} />
          <Route path="/play/action" element={<PageAction/>} />
          <Route path="/play/adventure" element={<PageAction/>} />
          <Route path="/play/arcade" element={<PageAction/>} />
          <Route path="/play/music" element={<PageAction/>} />
          <Route path="/play/online" element={<PageAction/>} />
          <Route path="/play/racing" element={<PageAction/>} />
          <Route path="/play/simple" element={<PageAction/>} />
          <Route path="/play/sport" element={<PageAction/>} />
          <Route path="/play/strategy" element={<PageAction/>} />
          <Route path="/fitness" element={<PageFitness></PageFitness>} />
        </Routes>
      <PageFooter />
    </BrowserRouter>
  )
}

export default App
