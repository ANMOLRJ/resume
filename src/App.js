import logo from './logo.svg';
import './App.css';
import Bio from './Component/Bio';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Contact from './Component/Contact';

function App() {
  return (
    <main>
     <Bio />
     <hr/>
     <Experience />
     <hr />
     <Skills />
     <hr />
     <Contact />

    </main>
  );
}

export default App;
