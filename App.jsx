import NavBar from "./components/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Contact /> 
  
    </div>
  )
}

export default App
