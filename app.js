$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
   
});

$('ul').on('click','span',function(event){
    
    $(this).parent().fadeOut(1000,function(){
      $(this).remove();
   })
    event.stopPropagation();
});

$("input[type='text']").on('keypress',function(event){
   if (event.which === 13){
       var inputValue = $(this).val();
       $(this).val("");
       $('ul').prepend('<li><span><i class="fa fa-trash-o"></i></span>'+inputValue+'</li>');
   }
});

$(".fa-plus").on('click',function(){
    $('input[type="text"]').fadeToggle(1000);
});

