import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authState = useSelector(state => state.auth);

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
            <button>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
