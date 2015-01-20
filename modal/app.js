$(document).ready(function(){
$('#modal').hide();
$('#modalBtn').fadeIn(1000,function(){
     $(this).click(function(){
         $('#modal').slideToggle(1000);
     })
});
});

