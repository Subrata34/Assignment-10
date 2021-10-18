
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Header></Header>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
