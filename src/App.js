import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count : {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br /><button>LOG IN</button>
      <h1>{isLoggedIn}</h1>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>Sign In</button>
      {isLoggedIn && <h1>MOVIE LISt</h1>}
    </div>
  );

}

export default App;
