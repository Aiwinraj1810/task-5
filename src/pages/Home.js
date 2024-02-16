import React from 'react'
import '../styles/Home.css'
import {useState} from 'react'
import logoReact from '../Assets/reactImg.jpg'
import logo1 from '../Assets/logo-1.svg'
import logo2 from '../Assets/logo-2.svg'
import logo3 from '../Assets/logo-3.svg'
import logo4 from '../Assets/logo-4.svg'
import logo5 from '../Assets/logo-5.svg'
import codingSS from '../Assets/codingss.png'
const Home = () => {

    const [dropdownStates, setDropdownStates] = useState({
        gettingStarted: false,
        anotherDropdown: false,
        JSX : false,
        Concept4 : false,
        Concept5 : false,
        // Add more dropdown states here if needed
      });
    
      const toggleDropdown = (dropdownName) => {
        setDropdownStates((prevState) => ({
          ...prevState,
          [dropdownName]: !prevState[dropdownName],
        }));
      };
    
  return (
    <div>
        <div className='wrapper'>

            <div className="course-overview">
        <div className='container'>

        <div>Courses &#65310; ReactJS</div>
        <h1>React - The Complete Guide 2024 (incl. React Router & Redux)</h1>
        <h3>Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</h3>
        <div>Course stats</div>
        <div>Authors</div>
        <div>misc.details</div>
        </div>
        <div className='video-sec'>
            <img src={logoReact} alt='react' />
        </div>

      </div>
        </div>
        {/* conurse-overview ends */}

        <div className="section-2">
            <div className="learnings">
                <h2 style={{margin:0}}>Learnings</h2>
                <div className="learnings-grid">
                    <div className='grid-1'>
                        <span><b>&#x2713;</b> Learn React from the ground up and finish the course as an advanced React developer</span><br />
                        <span><b>&#x2713;</b> Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses

                        </span><br />

                        <span><b>&#x2713;</b> Follow along locally or in a cloud development environment</span> <br />

                        <span><b>&#x2713;</b> Manage complex state efficiently with React's Context API & React Redux</span>
                        </div>
                    <div className='grid-1'>
                    <span><b>&#x2713;</b> Learn about routing & route-related data fetching with React Router</span><br />
                        <span><b>&#x2713;</b> Build multiple high-quality demo apps, including a fullstack app built with NextJS</span><br />
                        <span><b>&#x2713;</b> Learn all about React Hooks and React Components</span><br />
                        <span><b>&#x2713;</b> Build standalone React apps & applications connected to a backend via HTTP</span><br />
                    </div>
                </div>
            </div>
         {/* Learnings ends */}

         <div className='course-spec'>
            <h2>This course includes:</h2>
            <div className="spec-grid" >
                <div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-solid fa-play"></i> 68 hours on-demand video</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span><i style={{paddingRight:3}} class="fa-solid fa-code"></i> Coding exercises</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-solid fa-book"></i> Assignments</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-solid fa-note-sticky"></i> 68 hours on-demand video</span>
                </div>
                
                </div>
               
                <div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-solid fa-file-arrow-down"></i> Downloadable resources</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span><i style={{paddingRight:10}} class="fa-solid fa-mobile"></i> Access on mobile and TV</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-regular fa-closed-captioning"></i>Closed captions</span>
                </div>
                <div className="spec-grid-1" style={{marginBottom:5}}>
                    <span> <i style={{paddingRight:10}} class="fa-solid fa-trophy"></i> Certificate of completion</span>
                </div>
                </div>
            </div>
         </div>

        <div className="company">
            <div className="text-content">
                <h4>Top companies offer this course to their employees</h4>
                <span>This course was selected for our collection of top-rated courses trusted by businesses worldwide. Learn more</span>
            </div>
            <div className="brand-images">
                <div><img src={logo1} alt='logo-1' /></div>
                <div><img src={logo2} alt='logo-2' /></div>
                <div><img src={logo3} alt='logo-3' /></div>
                <div><img src={logo4} alt='logo-4' /></div>
                <div><img src={logo5} alt='logo-5' /></div>
        
            </div>
        </div>
          {/* company ends */}

          <div className="exercise-window">
            <div className="grid">
                <h1>Coding Exercises</h1>
                <span>
                This course includes our updated coding exercises so you can practice your skills as you learn.
                </span>

                <p>See more</p>
            </div>
            <div className="grid-2">
            <img src={codingSS} alt='coding' style={{width:"100%"}} />
            </div>
          </div>

          {/* exercise-window ends */}
        <div className="course-content">
            <div className="course-header">
                <h1>Course content</h1>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <p>5 sections &#x2022; 5 lectures &#x2022; 50 hours content </p>
                <p>Link</p>

                </div>
                </div>
                
                <div>
                <div className='drop-container'>

                    <div className='dropDown-parent'>
                    <div className='dropDown' onClick={() => toggleDropdown('gettingStarted')}>
                        <span className="dropdown-icon">{dropdownStates.gettingStarted ? '▲' : '▼'}</span>
                        <span className="dropdown-title">Getting Started</span>
                    </div>
                    {dropdownStates.gettingStarted && (
                        <div className="dropdown-content">
                        {/* Dropdown content starts here */}
                        Starter content
                        {/* Dropdown content ends here */}
                        </div>
                    )}
                    </div>

                    <div className='dropDown'>
                    <div onClick={() => toggleDropdown('anotherDropdown')}>
                        <span className="dropdown-icon">{dropdownStates.anotherDropdown ? '▲' : '▼'}</span>
                        <span className="dropdown-title">States and Props</span>
                    </div>
                    {dropdownStates.anotherDropdown && (
                        <div className="dropdown-content">
                        {/* Dropdown content starts here */}
                        <ul>
                            <li><strong>Stateful Components</strong></li>
                            <li><strong>State</strong></li>
                            <li><strong>Prop</strong></li>
                            <li><strong>Passing Data</strong></li>
                            <li><strong>Component Communication</strong></li>
                            </ul>

                        {/* Dropdown content ends here */}
                        </div>
                    )}
                    </div>

                    {/* Add more dropdowns as needed */}
                        
                        
                    <div className='dropDown'>
                    <div onClick={() => toggleDropdown('JSX')}>
                        <span className="dropdown-icon">{dropdownStates.JSX ? '▲' : '▼'}</span>
                        <span className="dropdown-title">JSX</span>
                    </div>
                    {dropdownStates.JSX && (
                        <div className="dropdown-content">
                        {/* Dropdown content starts here */}
                        <ul>
                            <li><strong>JavaScript Syntax Extension</strong></li>
                            <li><strong>Familiar HTML-Like Syntax</strong></li>
                            <li><strong>Embedding JavaScript Expressions</strong></li>
                            <li><strong>Component Composition</strong></li>
                            <li><strong>Babel Transpilation</strong></li>
                            </ul>

                        {/* Dropdown content ends here */}
                        </div>
                    )}
                    </div>

                    {/* Dropdown-4 */}
                    <div className='dropDown'>
                    <div onClick={() => toggleDropdown('Concept4')}>
                        <span className="dropdown-icon">{dropdownStates.Concept4 ? '▲' : '▼'}</span>
                        <span className="dropdown-title">useState</span>
                    </div>
                    {dropdownStates.Concept4 && (
                        <div className="dropdown-content">
                        {/* Dropdown content starts here */}
                        <ul>
                            <li><strong>useState Hook</strong></li>
                            <li><strong>State Management</strong></li>
                            <li><strong>Initializing State</strong></li>
                            <li><strong>Updating State</strong></li>
                            <li><strong>Functional Updates</strong></li>
                            </ul>


                        {/* Dropdown content ends here */}
                        </div>
                    )}
                    </div>
                    {/* Dropdown-4 */}
                    {/* Dropdown-5 */}
                    <div className='dropDown'>
                    <div onClick={() => toggleDropdown('Concept5')}>
                        <span className="dropdown-icon">{dropdownStates.Concept5 ? '▲' : '▼'}</span>
                        <span className="dropdown-title">Framer motion</span>
                    </div>
                    {dropdownStates.Concept5 && (
                        <div className="dropdown-content">
                        {/* Dropdown content starts here */}
                        <ul>
                            <li><strong>Framer Motion Library</strong></li>
                            <li><strong>Animation</strong></li>
                            <li><strong>Keyframes</strong></li>
                            <li><strong>Transitions</strong></li>
                            <li><strong>Variants</strong></li>
                            </ul>

                        {/* Dropdown content ends here */}
                        </div>
                    )}
                    </div>
                    {/* Dropdown-5 */}

                    </div>
                         {/* Drop-container ends */}

                         
            </div>
        </div>
        <div className="requirements">
            <h1>Requirements</h1>
            <span>
                <ul>
                    <li>
                    JavaScript + HTML + CSS fundamentals are absolutely required
                    </li>
                    <li>
                    You DON'T need to be a JavaScript expert to succeed in this course!
                    </li>
                    <li>
                    ES6+ JavaScript knowledge is beneficial but not a must-have
                    </li>
                    <li>
                    NO prior React or any other JS framework experience is required!
                    </li>
                </ul>
            </span>
        </div>

        <div className="Decription-sec">
            <div className="description-header" >
                <h1>
                    Description
                </h1>
                <span>
                This bestselling course has turned more than 800,000 students into ReactJS developers <i>more than any other React course on Udemy!</i> 
                </span>
            </div>
            <div className='update-body'>

            <div className="description-updates" style={{marginTop:"5%", display:'flex', flexDirection:'column'}}>
                <b><i>Update date</i></b>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur reprehenderit fugiat </span>
            </div>
            <div className="description-updates" style={{marginTop:"5%", display:'flex', flexDirection:'column'}}>
                <b><i>Update date</i></b>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur reprehenderit fugiat </span>
            </div>
            <div className="description-updates" style={{marginTop:"5%", display:'flex', flexDirection:'column'}}>
                <b><i>Update date</i></b>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur reprehenderit fugiat </span>
            </div>

            <div className="welcomeReact" style={{marginTop:"5%", display:'flex', flexDirection:'column'}}>
                <h2>Welcome to "React - The Complete Guide"!</h2>
                <span>
                This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer.<br />
                <br />
                This is a huge course because it really covers EVERYTHING you need to know and learn to become a React.js developer! <br />
                <br />
                No matter if you know nothing about React or if you already got some basic React knowledge (not required but also not a problem), you will get tons of useful information and knowledge out of this course! <br />
                <br />
                My goal with this course is to ensure that you feel confident working with React, so that you can apply for React jobs, use it in your own projects or simply enhance your portfolio as a developer - whatever your goal is: This course gets you there! <br />
                <br />
                I kept this course updated since its initial launch to ensure that you always learn React in the best possible and up-do-date way!
                </span>

                <h3>What's in the course ?</h3>
                <ul>
                    <li>A thorough introduction to React.js (What is it and why would you use it?)</li>
                    <li>All the core basics: How React works, building components with React & building UIs with React</li>
                    <li>Components, props & dynamic data binding</li>
                    <li>Working with user events and state to create interactive applications</li>
                    <li>A (thorough) look behind the scenes to understand how React works under the hood</li>
                    <li>Detailed explanations on how to work with lists and conditional content</li>
                    <li>React Hooks (in-depth)!</li>
                    <li>Working with built-in Hooks and building custom Hooks</li>
                    <li>How to debug React apps</li>
                    <li>Styling React apps with "Styled Components" and "CSS Modules"</li>
                    <li>Working with "Fragments" & "Portals"</li>
                    <li>Dealing with side effects</li>
                    <li>Class-based components and functional components</li>
                    <li>Sending Http requests & handling transitional states + responses</li>
                    <li>Handling forms and user input (incl. validation)</li>
                    <li>Redux & Redux Toolkit</li>
                    <li>Routing with React Router</li>
                    <li>An in-depth introduction into Next.js</li>
                    <li>Deploying React Apps</li>
                    <li>Implementing Authentication</li>
                    <li>Unit Tests</li>
                    <li>Combining React with TypeScript</li>
                    <li>Adding Animations</li>
                    <li>Tons of examples and demo projects so that you can apply all the things you learned in real projects</li>
                    <li>And so much more - check out the full curriculum on this page!</li>
                </ul>

            </div>

            </div>

        </div>

            <div className="featured-review">
                <h1>Featured review</h1>
                <div className="user-details">
                    <div className="user-img">
                        <img src={logoReact} alt='logo' style={{width:"100%", objectFit:'cover', borderRadius:"50%"}}  />
                    </div>
                    <div className="user-details" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    <div className='ratings' style={{flexDirection:'row', display:'flex'}}>
                        <div>&#11088;</div>
                        <div>&#11088;</div>
                        <div>&#11088;</div>
                        <div>&#11088;</div>
                        <div>&#11088;</div>
                        <div className="rating-time">5 years ago</div>
                    </div>
                    </div>
                </div>
                <div className="comments">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae enim sequi molestias ex delectus reiciendis ducimus asperiores ipsa illum, sapiente distinctio sunt pariatur quisquam sed impedit blanditiis dolorum facere.
                </div>
            </div>
            <div className="other-courses">
                <h1>Other courses</h1>
                <div className="table-section">
                <table border="1" style={{width:"100%"}}>
                    <tbody>
                        <tr>
                        <td>img</td>
                        <td><h3>Course title</h3></td>
                        <td><h3>Ratings</h3></td>
                        <td>Row 1, Column 4</td>
                        <td>Row 1, Column 5</td>
                        </tr>
                        <tr>
                        <td>img</td>
                        <td><h3>Course title</h3></td>
                        <td><h3>Ratings</h3></td>
                        <td>Row 2, Column 4</td>
                        <td>Row 2, Column 5</td>
                        </tr>
                        <tr>
                        <td>img</td>
                        <td><h3>Course title</h3></td>
                        <td><h3>Ratings</h3></td>
                        <td>Row 3, Column 4</td>
                        <td>Row 3, Column 5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div className="instructors">
                <h1>Instructors</h1>
                <div className="ins-header">
                    <h2>Acedeminnd by Arthur Morgan</h2>
                    <span>Online education</span>
                    <div className="user-details" style={{marginTop:"3%"}}>
                    <div className="user-img">
                        img
                    </div>
                    <div className="user-details" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    </div>
                </div>
                <div className="comments">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae enim sequi molestias ex delectus reiciendis ducimus asperiores ipsa illum, sapiente distinctio sunt pariatur quisquam sed impedit blanditiis dolorum facere.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repudiandae enim sequi molestias ex delectus reiciendis ducimus asperiores ipsa illum, sapiente distinctio sunt pariatur quisquam sed impedit blanditiis dolorum facere.
                </div>
                </div>
            </div>

            <div className="user-reviews">
                <div className="user-header" style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                <h1 style={{color:'darkorange'}}>&#9733;</h1>
                
                <h2 style={{marginLeft:"2%", verticalAlign:'middle'}}>5 course rating &#x2022; 1K reviews</h2>
                </div>
                <div className="review-grids">
                    <div className="review-1">
                    <div className="user-review" style={{marginTop:"3%"}}>
                    <div className="user-img">
                        img
                    </div>
                    <div className="user-review" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    </div>
                </div>
                    </div>
                    <div className="review-1">
                    <div className="user-review" style={{marginTop:"3%"}}>
                    <div className="user-img">
                        img
                    </div>
                    <div className="user-review" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    </div>
                </div>
                    </div>
                    <div className="review-1">
                    <div className="user-review" style={{marginTop:"3%"}}>
                    <div className="user-img">
                        img
                    </div>
                    <div className="user-review" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    </div>
                </div>
                    </div>
                    <div className="review-1">
                    <div className="user-review" style={{marginTop:"3%"}}>
                    <div className="user-img">
                        img
                    </div>
                    <div className="user-review" style={{display:'flex', flexDirection:'column'}}>
                        <span>Name</span>
                        <span>courses</span>
                        <span>reviews</span>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-top">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </div>
                    <div>
                    <div className="brand-images" style={{paddingLeft : "1rem"}}>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
        
            </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className='footerlinks'>
                        <div className="sec" style={{display:'flex', flexDirection:'column'}}>
                            <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                        </div>
                        <div className="sec"  style={{display:'flex', flexDirection:'column'}}>
                        <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                        </div>
                        <div className="sec"  style={{display:'flex', flexDirection:'column'}}>
                        <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                            <span>Link</span>
                        </div>
                    </div>
                    <div>
                        <button>English</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="logo">
                        Udemy
                    </div>
                    <div className="copyright">cpp</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
