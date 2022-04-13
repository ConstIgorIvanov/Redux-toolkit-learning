import './App.scss';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'

import ReduxState from './pages/ReduxState'
import ReduxThunk from "./pages/ReduxThunk";
import ReduxTodo from "./pages/ReduxTodo";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/react-gh-pages"
          element={<ReduxState></ReduxState>}
        ></Route>
        <Route
          path="/react-gh-pages/thunk"
          element={<ReduxThunk></ReduxThunk>}
        ></Route>
        <Route
          path="/react-gh-pages/todo"
          element={<ReduxTodo></ReduxTodo>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
