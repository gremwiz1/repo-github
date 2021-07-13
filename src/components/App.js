import logo from '../logo.svg';
import '../App.css';
import ColoredUserpic from './ColoredUserpic';
import src from './avatar.jpg';
function App() {
  return (
    <div className="App">
      <ColoredUserpic
    src={src}
    size={150}
    margin={4}
    backgroundColor='red'
    colors={['green', 'blue']}
    hoverColors={['blue', 'green']}
    colorWidth={6}
/>
    </div>
  );
}

export default App;
