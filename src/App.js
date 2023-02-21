import './App.css';
import { init } from './render';

function App() {
  return (
    // script is in render.js
    <script src="./render.js"></script>
  );

  init();
}

export default App;
