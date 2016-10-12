
$(document).ready(function() {
	$('#button').click(function() {
		var toAdd = $('input').val();
		var t = $('ul').append('<li class="style2"><input type="checkbox">'+ toAdd + '</li>');
		console.log(t);


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



