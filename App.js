
import './App.css';
import Navbar from './componant/navbar';
import Footer from './componant/footer';
import Menu from './pages/Menu';
import Contact from './pages/contact';
import about from './pages/about';


import Home from './pages/Home';

import{BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  
  return(

<div className='App'>
<Router>
<Navbar/>
 <Switch>
           <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={about} />
          <Route path="/contact" exact component={Contact} />
  </Switch>
  <Footer/>
</Router>


</div>


  );


}

export default App;

