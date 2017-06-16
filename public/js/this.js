var $source = $("#source");
var $sortBy = $("#sortBy");
var $articles = $("#article");
var articleTemplate = ""+
	'<li class= "list-group-item headlineBox">'+
	'<h3>{{title}}</h3>'+
	'<button class="btn btn-default visitPage"><a href="{{url}}" target="_empty">Visit</a></button>'+
	'<button class="btn btn-default addToReading">Read Later</button>'+
	'</li>';

function buildArticles(title){
	$('#newsArticles').append(Mustache.render(articleTemplate, title));
};

function buildReader(){};

$(document).ready(function(){
	var apiKey="4f91f87027c643faa09e17e0d75c6b19";
	// Polygon news source
	$('#polygonImg').on('click', function(){
		$('#newsArticles').empty();
		$('#polygonImg').fadeTo(500, 0.6);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey='+apiKey,
			success: function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}
		});
	});
	//Ars Technica Source
	$('#arsTechnicaImg').on('click', function(){
		$('#newsArticles').empty();
		$('#arsTechnicaImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey='+apiKey,
			success: function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}
		});
	});
	//Engadget Source
	$('#engadgetImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#engadgetImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Engadget is down at the moment')
			})
			
		});
	//IGN source
	$('#ignImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#ignImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('IGN is down at the moment')
			})
			
		});
	//Hacker News Source
	$('#hackImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#hackImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);

		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Hacker News is down at the moment')
			})
			
		});
	//Redcode Source
	$('#redcodeImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#redcodeImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);

		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Redcode is down at the moment')
			})
			
		});
	//Tech Crunch Source
	$('#techcrunchImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#techcrunchImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);

		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Tech Crunch is down at the moment')
			})
			
		});
	//The Verge Source
	$('#vergeImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#vergeImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);

		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('The Verge is down at the moment')
			})
			
		});
	//Fortune Source
	$('#fortuneImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#fortuneImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#nextwebImg').fadeTo(500, 1);


		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Fortune is down at the moment')
			})
			
		});
	//The Next Web Source
	$('#nextwebImg').on('click', function(){
		console.log('this is working');
		$('#newsArticles').empty();
		$('#nextwebImg').fadeTo(500, 0.6);
		$('#polygonImg').fadeTo(500, 1);
		$('#arsTechnicaImg').fadeTo(500, 1);
		$('#engadgetImg').fadeTo(500, 1);
		$('#ignImg').fadeTo(500, 1);
		$('#hackImg').fadeTo(500, 1);
		$('#redcodeImg').fadeTo(500, 1);
		$('#techcrunchImg').fadeTo(500, 1);
		$('#vergeImg').fadeTo(500, 1);
		$('#fortuneImg').fadeTo(500, 1);


		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey='+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('The Next Web is down at the moment')
			})
			
		});

});