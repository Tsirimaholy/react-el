import "./App.css"
import JokeForm from "./component/core/JokeForm.jsx";
import {useEffect, useState} from "react";
import JokeApi from "./service/JokeApi.js";

function App() {
    const [joke, setJoke] = useState();

    useEffect(() => {
        (async () => {
            try {
                const currentJoke = await JokeApi.getRandomJoke();
                setJoke(currentJoke.data);
                console.log(currentJoke.data)
            } catch (e) {
                console.error("Fetch failed")
            }
        })()
    }, []);

    return (
        <div className="main-wrapper">
            <div className="form-container">
                <JokeForm/>
            </div>
            <div className="jokes-container">
                <h2>Random joke</h2>
                {joke ?
                    (<div>
                        <p>{joke.value}</p>
                    </div>) : "No joke yet"
                }

            </div>
        </div>
    )
}

export default App
