export const DogImagesApi = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const json = await res.json();
  

  return json.message;
};