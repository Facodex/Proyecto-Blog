$('document').ready(function(){
    // mi slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    //mis posts
    if (window.location.href.indexOf('index') > -1) {
      var posts = [
        {
          title: "Titulo de prueba 1",
          date: new Date,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum modi cupiditate ut voluptatum quaerat! Quidem non quis obcaecati cupiditate, doloribus delectus libero,fugiat unde tempore repellat, dolores assumenda placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus distinctio assumenda sint, vel harum? Illo, fugiat repellat ab vitae dolores et aperiam inventore, eum neque, molestias assumenda maiores delectus.'
        },
        {
          title: "Titulo de prueba 2",
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum modi cupiditate ut voluptatum quaerat! Quidem non quis obcaecati cupiditate, doloribus delectus libero,fugiat unde tempore repellat, dolores assumenda placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus distinctio assumenda sint, vel harum? Illo, fugiat repellat ab vitae dolores et aperiam inventore, eum neque, molestias assumenda maiores delectus.'
        },
        {
          title: "Titulo de prueba 3",
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum modi cupiditate ut voluptatum quaerat! Quidem non quis obcaecati cupiditate, doloribus delectus libero,fugiat unde tempore repellat, dolores assumenda placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus distinctio assumenda sint, vel harum? Illo, fugiat repellat ab vitae dolores et aperiam inventore, eum neque, molestias assumenda maiores delectus.'
        },
        {
          title: "Titulo de prueba 1",
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum modi cupiditate ut voluptatum quaerat! Quidem non quis obcaecati cupiditate, doloribus delectus libero,fugiat unde tempore repellat, dolores assumenda placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus distinctio assumenda sint, vel harum? Illo, fugiat repellat ab vitae dolores et aperiam inventore, eum neque, molestias assumenda maiores delectus.'
        },
      ];
      // recorriendo mis posts 
      posts.forEach((item, index) =>{  
        var post = `
          <article id="post"> 
          <h2>${item.title}</h2> <br>
          <span class="date">${item.date}</span> <br><br>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
          </article>
        `
        // añadiendo los post a la seccion con DIV posts
        $("#posts").append(post);
      });
    }

    //changing themes
    var theme = $('#theme');

    $('#to-green').click(function(){
      theme.attr('href', 'css/green.css');
    });
    $('#to-red').click(function(){
      theme.attr('href', 'css/red.css');
    });
    $('#to-blue').click(function(){
      theme.attr('href', 'css/blue.css');
    });

    // scroll hacia arriba
    $('.scrollUp').click(function(e){ //le doy la (e) para hacer el preventDefault y no ser redirigido
      e.preventDefault 

      $('html, body').animate({
        scrollTop: 0,
      }, 2000 );

      return false;
    });

    //Login false
    $('#formulario').submit(function(){
      var form_name = $('#form_name').val()
      localStorage.setItem('name', form_name)  //aqui guardo el dato en el localStorage
    });

    var form_name = localStorage.getItem('name'); //aqui guardo en variable mi dato de local storage

    var about_p = $('#about p');
    if (form_name != null && form_name != 'undefined') {
      about_p.html("<h3>Sesion activa "+ form_name + "  </h3>");
      about_p.append('<a href="#" id="logout">Cerrar sesion</a>');
      $('.login').hide(); // aqui se encuentra mi formulario
    }

    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  //si estamos en la pagina sobre mi haz el efecto acordeon
  if (window.location.href.indexOf('sobremi') > -1) {
    $('#acordeon').accordion();
  }

  // creando nuestro reloj
  if (window.location.href.indexOf('reloj') > -1) {
    var reloj = moment().format('h:mm:ss');

    setInterval(function(){ 
      var reloj = moment().format('h:mm:ss'); 
      $('#reloj').html(reloj);
    }, 1000);

  }

  // validacion de formulario
  if (window.location.href.indexOf('contact') > -1) {
    $('#input_date').datepicker({
      dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang:'es',
      errorMessagePosition: 'top',  //esto es un metodo de este pluggin para mostrar los errores detallados arriba
      scrollToTopOnError: true      // este tambien
    });
  }
});