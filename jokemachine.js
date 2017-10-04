$(document).ready(function() {
	$(".generate").on("click", function(){
		$.getJSON("https://icanhazdadjoke.com/", function newJoke(result) {
       		$(".insert-joke").html(result.joke);
      });
	});

	$(".twitter").on("click", function(){
		var joke = document.getElementById("theJoke").innerHTML;
		window.open('https://twitter.com/intent/tweet?text=' + joke);
	});
});

