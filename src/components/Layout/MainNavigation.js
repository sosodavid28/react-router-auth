import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authReducerActions } from '../../store/auth-reducer';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authReducerActions.logout());
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authState.token && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {authState.token && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {authState.token && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
