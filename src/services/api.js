const key = '21b58d4a6c5c4e1e926181811221206';
const endPoint = 'http://api.weatherapi.com/v1/';

const fetchData = async (city) => {
  const url = `${endPoint}current.json?key=${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
