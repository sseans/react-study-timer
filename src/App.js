import "./App.css";
import LowerNavigation from "./Components/LowerNavigation/LowerNavigation";
import TimerNavbar from "./Components/TimerNavbar/TimerNavbar";
import HeroLogin from "./Components/HeroLogin/HeroLogin";

function App() {
  return (
    <div className="App">
      <TimerNavbar />
      <LowerNavigation />
      <HeroLogin />
    </div>
  );
}

export default App;
