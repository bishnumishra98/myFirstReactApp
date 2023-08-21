// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div style={{display: 'flex'}}>
      <Card name="Vishnu" mail="vishnu@gmail.com" image="https://via.placeholder.com/200" alt="Vishnu's image"/>
      <Card name="Kachra" mail="kachra@gmail.com" image="https://via.placeholder.com/200" alt="Kachra's image"/>
      <Card name="Jeet" mail="jeet@gmail.com" image="https://via.placeholder.com/200" alt="Jeet's image"/>
    </div>
  );
}

export default App;
