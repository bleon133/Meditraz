$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  })

  //jquery for expand and collage the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden")
  })

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible")
  })

  const btnRegistrarMed = document.getElementById('btnRegistrarMed');

  btnRegistrarMed.addEventListener('click', () => {
    Swal.fire("Registro Exitoso!", "El medicamento ha sido registrado exitosamente!", "success");
  });


  const btnRegistrarEqui = document.getElementById('btnRegistrarEqui');

  btnRegistrarEqui.addEventListener('click', () => {
    Swal.fire("Registro Exitoso!", "El equipo ha sido registrado exitosamente!", "success");
  });
})


