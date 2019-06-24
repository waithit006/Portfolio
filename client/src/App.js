import React from 'react';
import './index.sass';
import 'font-awesome/css/font-awesome.css'
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Education from './components/education/Education'

const App = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <div className="container-fluid">

      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/skill" component={Skill} />
        <Route path="/experience" component={Experience} />
        <Route path="/project" component={Project} />
        <Route path="/education" component={Education} />
      </Router>
    </div>
  );
}

export default App;
