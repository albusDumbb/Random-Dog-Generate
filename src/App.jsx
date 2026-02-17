import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dog from "./DogPage/Dog";
import DogBreed from "./DogPage/DogBreed";


const App = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dog />} />
                    <Route path="/dogbreed" element={<DogBreed />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;

