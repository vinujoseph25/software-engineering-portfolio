import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Header extends React.Component {
             render() {
                       return (<Router>
<div>
<Link to="/">Home</Link> |
<Link to="/about"> About Us </Link> |
<Link to="/courses"> Courses </Link> |
<Link to="/contact"> Contact Us </Link>

<Route exact path = "/" component = {Home} />
<Route path = "/about" component = {About} />
<Route path = "/courses" component = {Courses} />
<Route path = "/contact" component = {ContactUs} />
<p> Copyright</p>
</div>
</Router>)
                      }
}
export default Header;

export class Home extends React.Component {
                  render() {
                            return (
                                    <div>
                                         <p> Inside home</p>
                                    </div>
                                   )
                           }
}

export class About extends React.Component {
                   render() {
                             return (
                                     <div>
                                          <p>Inside AboutUs component...</p>
                                          <p>Rendered as default child component to Home component</p>
                                     </div>
                                    )
                            }
}

export class Courses extends React.Component {
                     render() {
                               return (
                                       <div>
                                            <p>Inside Courses component...</p>
                                       </div>
                                      )
                              }
}

export class ContactUs extends React.Component {
                       render() {
                                 return (
                                         <div>
                                              <p>Inside ContactUs component...</p>
                                         </div>
                                        )
                                }
}

ReactDOM.render(<Header />, document.getElementById('app'));

