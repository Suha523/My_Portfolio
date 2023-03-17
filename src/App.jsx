import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import React_Temp from "./assets/thumbnails/react_template_cover.png";
import Agency from "./assets/thumbnails/agency_cover.png";
import Cake_Store from "./assets/thumbnails/cake_store_cover.png";
import Campsite from "./assets/thumbnails/campsite_cover.png";

function App() {
  let projects = [
    {
      id: 0,
      title: "React Template",
      link: "https://suha523.github.io/Start-Bootstrap-React-Template/",
      thumbnail: React_Temp,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, officiis!",
    },
    {
      id: 1,
      title: "Agency Landing Page",
      link: "https://suha523.github.io/Agency-design-template/",
      thumbnail: Agency,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, officiis!",
    },
    {
      id: 2,
      title: "Cake Store Landing Page",
      link: "https://incomparable-muffin-451fdc.netlify.app/",
      thumbnail: Cake_Store,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, officiis!",
    },
    {
      id: 3,
      title: "Campsite Landing Page",
      link: "https://suha523.github.io/Campsite-Landing-Page-React/",
      thumbnail: Campsite,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, officiis!",
    },
  ];
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
