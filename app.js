
$(document).ready(function() {
	$('#button').click(function() {
		var toAdd = $('input').val();
		var t = $('ul').append('<li class="style2">' + toAdd + '</li>');
		console.log(t);


	});
});


 $('ul').on('click','li', function(){
	$(this).toggleClass('cocher');

});


	
     

