
 $(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input').val();
        $('ul').append('<li>' + toAdd + '</li>')

       
        });
    });


	$('ul').on('click','li', function(){
	$(this).toggleClass('cocher');
	
});
