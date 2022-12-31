export const handleError = response => {
  if (!response.ok && response.status !== 303) { 
     throw Error(response.statusText);
  } else {
     return response
  }
};

