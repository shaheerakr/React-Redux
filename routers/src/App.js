import React,{Component} from 'react';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Rainbow from './components/hoc/rainbow'
import Post from './components/post'
import {BrowserRouter,Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/contact' component = {Contact}/>
          <Route path = '/post/:post_id' component = {Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Rainbow(App);
