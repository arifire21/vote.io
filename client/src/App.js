import logo from './logo.svg';
import './App.css';
import DashDrawer from './components/DashDrawer';
import PermanentDrawerRight from './components/PermDrawerLeft';

function App() {
  return (
    <div>
      <h1>Hi</h1>
      {/* <DashDrawer/> */}
      <PermanentDrawerRight/>
    </div>
  );
}

export default App;
