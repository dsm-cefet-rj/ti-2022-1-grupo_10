// Animate Smooth Scroll
$('#ir-cadastro').on('click', function() {
    const cadastro = $('#cadastro').position().top;
  
    $('html, body').animate({
        scrollTop: cadastro
      },
      900
    );
  });
  
  $('#ir-produzir').on('click', function() {
    const produzir = $('#produzir').position().top;
  
    $('html, body').animate({
        scrollTop: produzir
      },
      900
    );
  });

  $('#ir-relatorio').on('click', function() {
    const relatorio = $('#relatorio').position().top;
  
    $('html, body').animate({
        scrollTop: relatorio
      },
      900
    );
  });