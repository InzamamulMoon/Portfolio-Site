import './App.css';

function App() {
  return (
    <div className='Profile_Content' id="Dev_Name">
      <header className="App-header">
        <h4>Hiya I'm Moon, how yah doin?</h4>
        <p>(This page very clearly needs work and don't worry I will
           I only worked on this project within 2 days alongside an IT internship) </p>
      </header>
    </div>
  );
}

function About_Me() {
  return (
    <div className='Profile_Content' id='About_Me'> 
      <h3>About Me</h3>
      <p>
        So you wanna know about me? I mean why else would you be down here! So as you already know 
        my name is Inzamamul Moon, an undergrad attending CUNY college at Manhattan. Currently I'm majoring 
        in Computer Science, aspiring to be a Software Engineer. My hobbies consist of reading, watching anime, and 
        just chatting with my friends. In my free time, I take the initiative to start projects in order to grow and expand 
        my skillset as a competent developer. So over the years I have acquired a particular set of skills. 
        Skills that make me desirable for companies wanting to hire some new capable faces. That I'm confident about!
      </p>
    </div>
  );
}

function Projects_skills() {
  return (
    <ul className='Profile_Content' id='Project_Skills'>
      <li className="Projects" id='Project-1'>
        <div className='project-inner'>
          <p className='Description'>
            A simple front-end clone of Google Search, Google Image Search, 
            and Google Advanced Search sites. Users can type in a query for any of the sites 
            and be taken to a Google search results page. This was an assignment for 
            Harvard CS50W like the next few listed projects. 
          </p>
          <footer className='Skills'>
            <ul className='Tech-List'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>
      </li>
      <li className="Projects" id='Project-2'>
        <div className='project-inner'>
          <p className='Description'>
            A simple Wikipedia clone using Django, HTML, and CSS. Users can search for Wiki entries,
            make new entries, edit entries, and can visit random entries via clicking the "Random Page"
            link.
          </p>
          <footer className='Skills'>
            <ul className='Tech-List'>
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>
      </li>
      <li className="Projects" id='Project-3'>
        <div className='project-inner'>
          <p className='Description'>
            A simple ecommerce website where items can be auctioned using Django, HTML, and CSS.
            Users are able to visit a page to create a new listing, view active listings and get
            more details about them, and add these listings to their watchlist.
          </p>
          <footer className='Skills'>
            <ul className='Tech-List'>
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>
      </li>
      <li className="Projects" id='Project-4'>
        <div className='project-inner'>
          <p className='Description'>
            A simple email site where registered users can send and receive emails
            from other registered users using Django, HTML, CSS, and JavaScript.
            Users are able to view their email, archive/unarchive them and reply to 
            these emails.
          </p>
          <footer className='Skills'>
            <ul className='Tech-List'>
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </footer>
        </div>
      </li>
    </ul>
  );
}

export default App;
export { About_Me };
export { Projects_skills };
