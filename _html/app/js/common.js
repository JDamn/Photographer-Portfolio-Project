$(window).on('load',function(){
  $('.preloader').delay(2000).fadeOut('slow');
});

$(".link-all").on('click',function(){
  $('.all').fadeIn('slow');
  $('.link-all').addClass('.active');
});
$(".link-personal").on('click',function(){
   $('.personalImg').fadeIn('slow');
   $('.photographyImg').fadeOut('slow');
   $('.portraitImg').fadeOut('slow');
});
$(".link-photography").on('click',function(){
   $('.photographyImg').fadeIn('slow');
   $('.personalImg').fadeOut('slow');
   $('.portraitImg').fadeOut('slow');
});
$(".link-portrait").on('click',function(){
   $('.portraitImg').fadeIn('slow');
   $('.personalImg').fadeOut('slow');
   $('.photographyImg').fadeOut('slow');
});

$('a.button').on('click', function(e) {
    var t;
    e.preventDefault();
    clearTimeout(t);
    var changeAttr = function() {
    $("#unactive a img[class]").each(function(){
    $(this).attr("src",$(this).attr("class")).removeAttr("class");
    });
    }
    $(this).toggleClass('loading');
    t = setTimeout(function(){
      $('a.button').removeClass("loading")
      changeAttr();
    }, 2500);
});
