import Footer from './components/footer'
import Header from './components/headerComponent/header'
import List from './components/listComponent/list'

export default function Home() {
  return (
    <main className="font-mono h-screen max-h-screen text-yellow-900 flex flex-col items-center pt-1.5 pb-12 px-3.5 bg-amber-100">
      <Header/>
      <List/>
      <Footer/>
    </main>
  )
}
