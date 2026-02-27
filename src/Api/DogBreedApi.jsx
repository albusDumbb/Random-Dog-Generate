export const DogBreedApi = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/breeds?page[size]=10");
  const json = await res.json();
  return json.data;
}