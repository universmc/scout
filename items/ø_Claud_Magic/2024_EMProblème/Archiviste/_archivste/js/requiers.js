fetch('srv/json/requiers.json')
  .then(response => response.json())
  .then(data => {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  })
  .catch(error => {
    console.error('Erreur :', error);
  });
