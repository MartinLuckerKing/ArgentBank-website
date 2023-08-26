import fetchWithToken from './utils/api';

function fetchData() {
  return fetchWithToken('/api/data', {
    method: 'GET',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
  });
}