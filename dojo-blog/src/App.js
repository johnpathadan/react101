
import Navbar from './Navbar';
import Home from './Home';

function App() {
  
  return (
    <div className="App">
       <Navbar />         {/* another option to write <Navbar><Navbar/> */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
