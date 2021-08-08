import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Components/Home';
import Header from './Components/Header';
import NewBlog from './Components/NewBlog';
import BlogPage from './Components/BlogPage';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>

          <Route path="/create">
            <NewBlog />
          </Route>

          <Route path='/posts/:id'>
            <BlogPage />
          </Route>
        </Switch>
      </Router>



    // <div>
    //  <Header />
     // <Home posts={posts} />
     // {/*<NewBlog />*/}
    // </div>
  );
}

export default App;
