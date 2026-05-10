import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Cursor from '../components/Cursor.jsx';
import Footer from '../components/Footer.jsx';
import Goal from '../components/Goal.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Projects from '../components/Projects.jsx';
import Reviews from '../components/Reviews.jsx';

function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Goal />
        <Projects />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
