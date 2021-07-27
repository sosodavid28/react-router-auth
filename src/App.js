import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { authReducerActions } from './store/auth-reducer';

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  if (token) {
    dispatch(authReducerActions.setTokenFromLocalStorage(token));
  }
  const authState = useSelector(state => state.auth);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authState.token && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {authState.token && <UserProfile />}
          {!authState.token && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
