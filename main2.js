const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c538078c1msheee9f94c432bbccp194a5bjsn437f38882160',
		'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
	}
};

fetch('https://motivation-quotes-api.p.rapidapi.com/api/quotes', options)
	.then(response => response.json())
    .then(response => {
        console.log(response)
        response.forEach(quote => {
            const motivationalQuotes = document.querySelector('#motivation');
            motivationalQuotes.textContent = quote.quote;
        })
        .catch(err => console.error(err));
    })
	
    //Function to go to HTML page with workout selected by the user when I click on the button

const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index2.html';
})


    

document.querySelector('#home').addEventListener('click', function(){
    document.querySelector('#home').classList.add('red');
});

document.querySelector('#about').addEventListener('click', function(){
    document.querySelector('#about').classList.add('red');
});

document.querySelector('#contact').addEventListener("click", function(){
    document.querySelector('#contact').classList.add('red');
});









