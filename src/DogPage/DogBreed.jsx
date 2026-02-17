import { useState, useEffect } from "react";

const DogBreed = () => {
    const [dogBreed, setDogBreed] = useState([]);
    
    useEffect(() => {
        fetch('https://dogapi.dog/api/v2/breeds?page[size]=10')
        .then(response => response.json())
        .then(jsonResponse => setDogBreed(jsonResponse.data))
    }, []);

    return(
        <>
            <main className="w-full h-screen flex flex-col p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4">
                    {dogBreed.map((breed) => (
                        <li key={breed.id} className="flex flex-col gap-2 rounded-lg p-2 text-black border border-blue-500 w-full h-auto text-center break-words">
                            <strong>
                                {breed.attributes.name}
                            </strong>
                            <strong className="text-gray-500 font-medium">
                                {breed.attributes.description}
                            </strong>

                        </li>
                    ))}

                    {dogBreed.length === 0 && <p>Loading Breeds...</p>}
                </ul>
            </main>
        </>
    );
};

export default DogBreed;