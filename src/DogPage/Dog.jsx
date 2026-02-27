import { useQuery } from "@tanstack/react-query";

import { DogImagesApi } from "../Api/DogImagesApi";


const DogImages = () => {
    const {data: dogImageUrl, isLoading, isError, refetch} = useQuery({
        queryKey: ["dogImages"],
        queryFn: DogImagesApi,
        enabled: false,
    });

    if (isLoading) return <p className="w-full h-screen flex justify-center items-center">Loading...</p>;
    if (isError) return <p className="w-full h-screen flex justify-center items-center">Loading...</p>;

    return (
        <>
            <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-2">
                <button className="w-fit rounded-lg border border-blue-500 p-2 hover:opacity-90 bg-blue-500 text-white active:scale-95 transition-all" onClick={refetch}>
                    Click To Show Dog
                </button>

                {dogImageUrl && (
                    <img
                    src={dogImageUrl}
                    alt="Random Dog"
                    className="w-80 h-80 object-cover rounded-md"
                    />
                )}
            </main>
        </>
    );






};

export default DogImages;