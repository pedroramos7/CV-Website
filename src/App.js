import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import './App.css';

function useScrollDirection() {
  const [scrollDir, setScrollDir] = React.useState("scrolling up");

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
      setScrollDir(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}

function FadeInSection(props) {
  const fadeIn = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 });
  return <animated.div style={fadeIn}>{props.children}</animated.div>;
}
const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

function App() {
  const scrollDir = useScrollDirection();

  return (
    <div className="App">
      <header className={`App-header ${scrollDir === "scrolling down" ? "hide" : ""}`}>
        <img src="/images/CV-Pedro.jpg" alt="Your Name" className="Profile-image" />
        <h1>Pedro Ramos</h1>
        <p>Software Engineer</p>
        <nav>
          <ul className="Navbar">
            <li><Link to="about" smooth={true} duration={700} offset={-70} className="NavButton">About Me</Link></li>
            <li><Link to="experience" smooth={true} duration={700} offset={-70} className="NavButton">Experience</Link></li>
            <li><Link to="skills" smooth={true} duration={700} offset={-70} className="NavButton">Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={700} offset={-70} className="NavButton">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <FadeInSection>
          <section id="about">
            <h2>About Me</h2>
            <p>I am a passionate Frontend Developer with a love for crafting engaging and intuitive digital experiences. With a background in computer science and a keen eye for design, I blend technical skills with creativity to build seamless web applications.</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="experience">
            <h2>Experience</h2>
            <div>
              <h3>Senior Frontend Developer – Amazing Tech Inc.</h3>
              <p>Jan 2020 - Present</p>
              <ul>
                <li>Lead the development of a progressive web application, enhancing user engagement by 30%.</li>
                <li>Implemented a responsive design strategy that increased mobile traffic by 50%.</li>
              </ul>
            </div>
            <div>
              <h3>Frontend Developer – Web Solutions Ltd.</h3>
              <p>Jun 2017 - Dec 2019</p>
              <ul>
                <li>Collaborated on a team to redesign a major e-commerce platform, improving load times by 25%.</li>
                <li>Developed custom JavaScript components for a dynamic user interface.</li>
              </ul>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="education">
            <h2>Education</h2>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>University of Technology, 2013 - 2017</p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills">
            <h2>Skills</h2>
            <ul>
              <li>HTML/CSS/JavaScript</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>Responsive Web Design</li>
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out for any opportunities or inquiries.</p>
            <p>Email: pedromiguelabreuramos@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/pedroramos07</p>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
}

export default App;
