import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import NotFund from './Component/Not-fundPage/NotFund'
import Services from './Component/Services/Services'
import About from './Component/About/About'
import Slider from './Component/Slider/Slider'
import Contact from './Component/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route exact path="/*">
            <Header></Header>
            <NotFund></NotFund>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
