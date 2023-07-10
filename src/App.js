import IndexRoute from "./routes/indexRoute";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
