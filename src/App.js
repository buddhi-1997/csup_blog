import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Components/Home';
import Header from './Components/Header';
import NewBlog from './Components/NewBlog';
import BlogPage from './Components/BlogPage';
import React from 'react';

const name = 'Madhushani';

export const User = React.createContext(name);

function App() {
  return (
      <Router>
        <User.Provider value={name}> {/*methana value={''} nm delete button eka pennanne na*/}
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
        </User.Provider>
      </Router>

  );
}

export default App;
