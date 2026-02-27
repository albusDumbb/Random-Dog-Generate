// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import DogBreedApi from "../Api/DogBreedApi";


const DogBreed = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: DogBreedApi,
    });

    // Loading and Error Handling
    if (isLoading) return <p className="w-full h-screen flex justify-center items-center">Loading...</p>;
    if (isError) return <p className="w-full h-screen flex justify-center items-center">Loading...</p>;

    return(
        <>
            <main className="w-full h-screen flex flex-col p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4">
                    {data.map((breed) => (
                        <li key={breed.id} className="flex flex-col gap-2 rounded-md p-2 text-black border border-blue-500 w-full h-auto text-center break-words">
                            <strong>
                                {breed.attributes.name}
                            </strong>
                            <strong className="text-gray-500 font-medium">
                                {breed.attributes.description}
                            </strong>

                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default DogBreed;