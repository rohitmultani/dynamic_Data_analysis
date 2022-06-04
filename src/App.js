import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/Sidebar";
import SkillTest from "./components/SkillSet/SkillTest";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <div>
      <Header></Header>
      <SideBar/>
      <ContextProvider>
        <SkillTest></SkillTest>
      </ContextProvider>
    </div>
  );
}

export default App;
