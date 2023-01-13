import "./App.css";
import background from "./assets/background.png";
import Form from "./components/JSX/Form.jsx";

function App() {
  return (
    <div className="registration-app">
      <img className="background" src={background} />
      <div className="heading">REGISTRATION</div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
