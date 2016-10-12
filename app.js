$(document).ready(function() {

	alert("BIENVENUE SUR VOTRE TO DO LIST");

	$('#button').click(function() {
		var toAdd = $('input').val();
		$('ul').append('<li class="style2"><input type="checkbox">'+ toAdd + '</li>');
	});
});


$('ul').on('click','li', function(){
	$(this).toggleClass('cocher');
});

$('.btn1').on('click',function(){
	$('li.style2.cocher').show();
	$('li.style2').show();
});


$('.btn2').on('click',function(){
	$('li.style2').show();
	$('li.style2.cocher').hide();
});


$('.btn3').on('click',function(){
	$('li.style2').hide();
	$('li.style2.cocher').show();
});	



