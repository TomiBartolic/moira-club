import { PlayApps } from '../../components/PlayApps'
import { LearnApps } from '../../components/LearnApps'
import { EnjoyApps } from '../../components/EnjoyApps'
import { FitnessApps } from '../../components/FitnessApps'
import { PageHero } from '../PageHero/PageHero'
export function PageHome() {
  return (
    <>
      <PageHero />
      <div className="container py-5">
        <PlayApps />
        <LearnApps />
        <EnjoyApps />
        <FitnessApps />
      </div>
    </>
  )
}
