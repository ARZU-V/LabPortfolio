import Frame from "./components/Frame";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Hero from "./sections/HeroSection";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <Frame>
      <Header />

      <SideNav />

      <main className="viewport">
        <div className="debug-screen">
          
        <Hero />
        <About />
        <Experience/>
        <Stack/>
        <Projects/>
        <Contact/>
        </div>
      </main>
    </Frame>
  );
}

export default App;