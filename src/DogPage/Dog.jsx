import { useEffect, useState } from "react";

const Dog = () => {
    // Data Stores Here
    const [dogData, setDogData] = useState(null);

    // This Fetch Data then Store it in State
    const dogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(jsonData => setDogData(jsonData.message));
    };

    useEffect(() => {
        dogImage();
    }, []);

    return(
        <>
            <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-2">
                <button className="w-fit rounded-lg border border-blue-500 p-2 hover:opacity-90 bg-blue-500 text-white active:scale-95 transition-all" onClick={dogImage}>
                    Click To Show Dog
                </button>

                <img src={dogData} alt="Random Dog" className="w-100 h-100 rounded-md" />
            </main>
        </>
    );



};

export default Dog;