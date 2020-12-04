$(document).ready(function(){
  $('.header__burger').click(function(event){
      $('.header__burger ,.menu,.menu_list').toggleClass('active');
      $('body').toggleClass('stop_scroll');
  });
});
