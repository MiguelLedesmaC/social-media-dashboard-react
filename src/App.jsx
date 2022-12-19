import Header from "./components/Header"
import Overview from "./components/Overview"
import SocialCards from "./components/SocialCards"

function App() {


  return (
    <div className="App font-Inter  lg:h-screen dark:bg-VeryDarkBlueB bg-VeryPaleBlueTopBGPattern flex flex-col items-center">
      <Header/>
      <SocialCards  />
      <Overview />
    </div>
  )
}

export default App
