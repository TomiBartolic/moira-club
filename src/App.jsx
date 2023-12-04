import './App.css'
import { PageHeader } from './components/PageHeader/PageHeader'
import { PageHome } from './components/PageHome/PageHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime:Infinity,
    }
  }
})


function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <PageHeader></PageHeader>
        <PageHome></PageHome>
    </QueryClientProvider>
    </>
  )
}

export default App
