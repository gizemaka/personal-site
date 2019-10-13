import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Cem Aslan</h2>
        <p><a href="mailto:cemaslan96@outlook.com">cemaslan96@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>I make computers draw things fast</h2>
      <p>Hi, I&apos;m Cem. I love to put my programming skills and sense of aesthetics at work to create beautiful images.
      </p>
      <p>
            I am a <a href="https://cs.hacettepe.edu.tr/">Computer Science</a> graduate, <a href="https://graphics.cs.hacettepe.edu.tr/">HCG</a> Alumni, and
            currently working as a Graphics Programmer at <a href="https://www.taleworlds.com/">Taleworlds</a> on <a href="https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/">Mount & Blade II: Bannerlord</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/projects" className="button">Works</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Cem Aslan <Link to="/">iamaslan.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
