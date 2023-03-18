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
      title: "Cake Store Landing Page",
      link: "https://incomparable-muffin-451fdc.netlify.app/",
      thumbnail: Cake_Store,
      description: "This is a landing page for a cake store developed using HTML, CSS, Bootstrap, and jQuery with amazing colors.",
    },
    {
      id: 1,
      title: "Campsite Landing Page",
      link: "https://suha523.github.io/Campsite-Landing-Page-React/",
      thumbnail: Campsite,
      description: "This is a landing page for a wild campsite developed using React, CSS, and Bootstrap. It is including powerful colors that fit the environment in this campsite.",
    },
    {
      id: 2,
      title: "React Template",
      link: "https://suha523.github.io/Start-Bootstrap-React-Template/",
      thumbnail: React_Temp,
      description: "Landing page template design developed using React, CSS, and Bootstrap.",
    },
    {
      id: 3,
      title: "Agency Landing Page",
      link: "https://suha523.github.io/Agency-design-template/",
      thumbnail: Agency,
      description: "Landing page template design developed using HTML, and CSS to make this design.",
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
