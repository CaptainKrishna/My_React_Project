import './App.css';
import Header from './mycomp/Header.js';
import Todos from './mycomp/Mainbody.js';
import Sidebar from './mycomp/sidebar';
function App() {
  return (
    <>
      <Header title="TodoList"/>
      <Sidebar/>
      <Todos />
    </>
  );
}

export default App;
