import "./App.css"
import JokeForm from "./component/core/JokeForm.jsx";


function App() {
    return (
        <div className="main-wrapper">
            <div className="form-container">
                <JokeForm/>
            </div>
            <div className="jokes-container">

            </div>
        </div>
    )
}

export default App
