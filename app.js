
	
 $(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
       var t=  $('.list').append('<div class="item"><input type="checkbox" name="cocher"><span>' + toAdd + '</span></input></div>');
          console.log(toAdd);
          console.log(t);
        $('.item').on('click', function() {
          // $(this).remove();
          $(this).text('EFFECTUER '+ toAdd);
        });
    });
});

/*$('input.checkbox').click(function(){
 ('div.list').text('text-decoration','line-through');

})

var trait;
$('div.list');
$('trait').on('click',function(){

	//if( $('input[name=cocher]').is(':checked') ){
 //$("div.list").classeList.toggle('checked');
//} else {
   // alert("jQuery c'est autre chose");
   trait.
}//

});*/

