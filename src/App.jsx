import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      <section>
        <Header />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
