//variabili per il template

var template_html = $('#song').html();

var template_function = Handlebars.compile(template_html);

//richiamo API

$.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
//ciclo per memorizzare tutte le proprieta di tutti gli
//oggetti e append del template finale in pagina
        for (var i = 0; i < data.response.length; i++) {
            var poster = data.response[i].poster;
            var title = data.response[i].title;
            var author = data.response[i].author;
            var genre = data.response[i].genre;
            var year = data.response[i].year;
            var placeholder = {
                'image' : poster,
                'title' : title,
                'author' : author,
                'genre' : genre,
                'year' : year
            }
            var html_finale = template_function(placeholder);
            $('.container').append(html_finale);

        }
    },
    'error': function() {
        alert('si è verificato un errore');
    }
});
