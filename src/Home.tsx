import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

const Home = () => {
  const { isAuth, login } = useAuth();

  return (
    <div>
      <h1>Welcome</h1>
      {isAuth ? (
        <Link data-testid="list-link" to="/list">Go to list</Link>
      ) : (
        <div>
          <p>You need to login</p>
          <button data-testid="auth-button" onClick={login}>Log in</button>
        </div>
      )}
    </div>
  );
};

export default Home;
