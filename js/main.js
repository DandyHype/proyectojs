$(function () {


    // Slider
    if(window.location.href.indexOf('index') > -1){
        $(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
            });
        });

    }


    //   Posts

    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
    
        ];
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer Mas</a>
            </article>
            `;
    
            $('#posts').append(post);
        })

    }
    

    

    var theme = $("#theme");
    $("#to-green").on("click", function(){
        theme.attr("href", "./css/green.css")
    })
    $("#to-red").on("click", function(){
        theme.attr("href", "./css/red.css")
    })
    $("#to-blue").on("click", function(){
        theme.attr("href", "./css/blue.css")
    })


    $(".subir").on("click", function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").on("submit", function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_p = $("#about p");
        about_p.html("<br><strong>Bienvenido, " + form_name +"</strong>");
        about_p.append('<a href="#" id="logout" >Cerrar sesion</a>');

        $("#login").hide();

        $("#logout").on("click", function(){
            localStorage.clear();
            location.reload();
        })
    }

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd/mm/yy",
            yearRange: "1984:2024"
        });

        $.validate({
            lang: 'es'
        });
    }
});