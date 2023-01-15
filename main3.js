const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'process.env.javascript_api_key',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=triceps', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err));
    