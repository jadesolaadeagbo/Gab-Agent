import axios from 'axios';

const apiKey = '1d2c4aa7280a4f3b846294be4d73e557';

async function getDefaultLanguage() {
  try {
    const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=${apiKey}`); 
    const clientCountry = response.data.country.name;
    console.log(clientCountry)
    if (clientCountry === 'Guinea-Bissau') {
      return 'portuguese';
    } 
    if (clientCountry === 'Nigeria') {
      return 'en'
      // return 'fr'; 
    }
    
    return 'en'; // Default language if no specific condition is met
  } catch (error) {
    console.error('Error:', error);
    return 'en'; // Fallback to default language in case of error
  }
}

export default getDefaultLanguage;