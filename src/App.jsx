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
import { PageAdventure } from './layout/PageAdventureGames/PageAdventure'
import { PageArcade } from './layout/PageArcadeGames/PageArcade'
import { PageMusic } from './layout/PageMusicGames/PageMusic'
import { PageOnline } from './layout/PageOnlineGames/PageOnline'
import { PageRacing } from './layout/PageRacingGames/PageRacing'

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
          <Route path="/play/adventure" element={<PageAdventure/>} />
          <Route path="/play/arcade" element={<PageArcade/>} />
          <Route path="/play/music" element={<PageMusic/>} />
          <Route path="/play/online" element={<PageOnline/>} />
          <Route path="/play/racing" element={<PageRacing/>} />
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
