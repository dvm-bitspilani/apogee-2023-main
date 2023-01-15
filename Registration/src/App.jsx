import "./App.css";
import Form from "./components/JSX/Form.jsx";
import Rings from "./components/JSX/Rings.jsx";

function App() {
  return (
    <div className="registration-app">
      <Rings />
      <div className="background">
        <div className="heading">REGISTRATION</div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
