import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dog from "./DogPage/Dog";


const App = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dog />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;

