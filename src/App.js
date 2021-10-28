import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import OpenedPostPage from './pages/OpenedPostPage';
import PostsStateProvider from './context';

export default function App() {
  return (
    <PostsStateProvider>
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/ra-router-crud/">
              <Redirect to="/" />
            </Route>
            <Route path="/posts/new" component={NewPostPage} />
            <Route path="/posts/edit/:id" component={EditPostPage} />
            <Route path="/posts/:id" component={OpenedPostPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </PostsStateProvider>
  );
}
