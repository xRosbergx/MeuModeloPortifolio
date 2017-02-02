//efeito de texto
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

//script para navegar com click do mouse
$(function(){
  $("ul a").click(function (event) {
    event.preventDefault();
    var idElemento = $(this).attr("href");
    var deslocamento = $(idElemento).offset().top;
    $('html, body').animate({ scrollTop: deslocamento }, 'slow');
  });
});

