import {Routes,Route} from 'react-router-dom'
import Home from './component/home';
import Login from './component/login';
import Jobs from './component/jobs';
import Notfound from './component/notfound';
import Protectedroute from './component/protectedrouted';
import Jobservice from './component/Jobservice';
import Blog from './component/Blog';
import JobitemsDetails from './component/jobitemDetails';


const App = ()=>(

  <Routes>

    <Route path='/' element = {<Protectedroute Component = {Home}/>} ></Route>
    <Route path='/login' element = {<Login/>} ></Route>
    <Route path='/jobs' element = {<Protectedroute Component = {Jobs}/>} ></Route>
    <Route path='/jobs/:id' element = {<Protectedroute Component = {JobitemsDetails}/>} ></Route>
    <Route path='/blog' element = {<Protectedroute Component = {Blog}/>} ></Route>
    <Route path='/jobservice' element = {<Protectedroute Component = {Jobservice}/>} ></Route>

    <Route path='/*' element = {<Notfound/>} ></Route>

  </Routes>




)

export default App;