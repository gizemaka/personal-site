import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  // <Main>
  //   <article className="post" id="index">
  //     <header>
  //       <div className="title">
  //         <h2><Link to="/">About this site</Link></h2>
  //         {/* <p>A beautiful, responsive, react app written with modern Javascript.</p> */}
  //       </div>
  //     </header>
  //     <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
  //       or you can check out my {' '}
  //       <Link to="/resume">resume</Link>, {' '}
  //       <Link to="/projects">projects</Link>, {' '}
  //       {/* view <Link to="/stats">site statistics</Link>, {' '} */}
  //       or <Link to="/contact">contact</Link> me.
  //     </p>
  //     {/* <p> Source available <a href="https://github.com/buzdolapci/personal-site">here</a>.</p> */}
  //   </article>
  // </Main>
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome</Link></h2>
          {/* <p>A beautiful, responsive, react app written with modern Javascript.</p> */}
        </div>
      </header>
      <p>You can check out my {' '}
      <b><Link to="/works">works</Link></b>, {' '}
       <b><Link to="/resume">resume</Link></b>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
         or <b><Link to="/contact">contact</Link></b> me.
      </p>
      {/* <p> Source available <a href="https://github.com/buzdolapci/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
