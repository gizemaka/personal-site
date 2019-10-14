import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Works</Link></h2>
          <p>A selection of few that I&apos;m not too ashamed of</p>
          
        </div>
      </header>
      <p>The work shown will mostly consist features developed for the Taleworlds' in-house engine whilst my time there, I lost most of the images from older works but they should at least paint a picture about me.</p>
      {/* <p>Work is ordered from most recent to oldest. </p> */}
      <p>You can contact me about my more boring works which do not involve these kind of visuals for me to put here. </p>
      
      {/* <p>Keep in mind that Taleworlds Engine is a small team and every member is also tasked with maintenance of the Mount & Blade Series. </p> */}
      
      <h3>Tiled Culling</h3>
      <p>Uses <Link to="/https://e8040b55-a-62cb3a1a-s-sites.googlegroups.com/site/takahiroharada/storage/2012SA_2.5DCulling.pdf?attachauth=ANoY7cqiw9L7_IGLQ8FakPbjZZB2O7cB1QId57_zJIwQoQOiMw8i3_bChsckmvR9zgpTlnn1On0qmwBVhIIO592s03XXBkinx1y32P5hVGCnmvL31SHjJII9jIxazKXXbZH8WAFz9PAC1BhHR4TkD6qXkL9362a3F6FlxL55GekbJYtfJVPWivhqSK8qZtnrP3zVmCcQaBQP6hY4CpbNewjqrthBtzmmRAzWohLs48c4FfEwl43_N3o%3D&attredirects=0">2.5D</Link> bitmasks technique, and <Link to="https://wickedengine.net/2018/01/10/optimizing-tile-based-light-culling/">coarse AABB</Link> tests for decals and environment maps  </p>
      
      <img style={{height: 320}} src={`${BASE_PATH}/images/projects/point_light.gif`} alt="" />
      <img style={{height: 320}} src={`${BASE_PATH}/images/projects/decal.jpg`} alt="" />
      <br /><br />
      <h3>Decal System Overhaul</h3>
      
      <p>
      - Switched to tiled decal rendering, generates a variable sized atlas for all decals in game. <br />
      - Used to render forward with meshes, detached and implemented seperate component type and a sub-renderer system for it to be able to optimize buffer fills every frame. <br />
      - Implemented an artist-friendly system which abstracts the atlas generation process from them, allowing to dynamically generate a new atlas in the background whilst they make changes.
      </p>
      <img src={`${BASE_PATH}/images/projects/hardlight.jpg`} alt="" />
      <p>Tiled culling also enabled more flexibility with decal rendering, above is hardlight blending for blood decals.</p>
      
      <img style={{height: 350}} src={`${BASE_PATH}/images/projects/moss1.jpg`} alt="" />
      <img style={{height: 350}} src={`${BASE_PATH}/images/projects/moss3.jpg`} alt="" />
      <img style={{height: 382}} src={`${BASE_PATH}/images/projects/moss2.jpg`} alt="" />
      <p>A pre-gbuffer variant of decals that can blend into parallax meshes. We procedurally placed these on frequently used materials to break the tiling. Above is a scene that makes heavy use of this technique to add moss details on stone crevices.</p>

      <h3>Replay Editor and Offline Renderer</h3>
      <p>I was also responsible for the Cinematic Replay Editor and the Offline Renderer, lots of refactoring and parallelization tricks along with visual improvements. Below is the Early Access Release Trailer demonstrating it's results.</p>
      <iframe width="840" height="472" src="https://www.youtube-nocookie.com/embed/yCk6Jk7DvrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br /><br />
      
      <h3>Damage System</h3>
      <p>Developed for an unannounced project which involved vehicles with user created arbitrary geometries. Same technique with the <Link to="https://robertsspaceindustries.com/comm-link/transmission/14568-Design-The-New-Damage-System">Star Citizen Damage Model</Link>, but with a few added challenges due to on the fly created geometry of vehicles in our game. <br />
      </p>

      <img style={{height: 380}} src={`${BASE_PATH}/images/projects/damage2.jpg`} alt="" />
      <img style={{height: 380}} src={`${BASE_PATH}/images/projects/damage1.jpg`} alt="" />
      <br /><br />
      <h3>Other</h3>
      <p>Most of these are ports of other implementations that I added when I was meddling with post-fx graph system.</p>
      <img style={{height: 400}} src={`${BASE_PATH}/images/projects/streaks.jpg`} alt="" />
      <p>Lens streak post effect à la J.J. Abrams.</p>

      <img style={{height: 426}} src={`${BASE_PATH}/images/projects/kurasawa.jpg`} alt="" />
      <p>Oil painting effect (port of kuwahara filter).</p>

      <p style={{position: 'absolute', right: 90}}>Triplanar prototyping shader.</p><br />
      <img style={{height: 325}} src={`${BASE_PATH}/images/projects/lens_flare.jpg`} alt="" />

      <img style={{height: 325}} src={`${BASE_PATH}/images/projects/triplanar.jpg`} alt="" />
      <p> Lens flare.</p>

      <h3>Publications</h3>

      <p> These are works that I have done during my time at HUCG Research Team. All software implementations in following works except management, content preperation and ML benchmarkings belong to me.</p>

      <img style={{height: 160}} src={`${BASE_PATH}/images/projects/computer_vision.jpg`} alt="" />
      <p> <Link to="https://1drv.ms/b/s!As78vRwJjLxTgesz7sqFIHlmKmdDFg?e=8GzDmK">Rendering Virtual Worlds with Humans for Computer Vision Tasks (First Authored)</Link></p>

      <img style={{height: 130}} src={`${BASE_PATH}/images/projects/vr_cafe.jpg`} alt="" />
      <p> <Link to="https://www.researchgate.net/publication/328439189_The_Virtual_Cafeteria_An_Immersive_Environment_for_Interactive_Food_Portion-Size_Education">The Virtual Cafeteria: An Immersive Environment for Interactive Food Portion-Size Education. In Proceedings of the 3rd International Workshop on Multisensory Approaches to Human-Food Interaction (Second Authored)</Link></p>

      {/* {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Projects;
