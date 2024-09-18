import Navbar from "./components/Navbar"
import StatusBar from "./components/StatusBar"
import TaskBox from "./components/TaskBox"

const App = () => {
  return (
    <div className="bg-hero w-full h-[100vh]">
      <Navbar />
      <StatusBar />
      <TaskBox  />
    </div>
  )
}

export default App