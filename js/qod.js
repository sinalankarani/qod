// get request to grab random post and append to the DOM
(function($) {
  let newQuoteBtn = document.getElementById('new-quote-button');

  // add a click event for the "Show Me Another" btn and then run the AJAX code below

  let lastPage = '';

  $(newQuoteBtn).on('click', function loadAjax(event) {
    event.preventDefault();

    lastPage = document.URL;

    $.ajax({
      // get a new quote using the GET method
      method: 'GET',
      url:
        qod_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        const post = data[0];
        history.pushState(null, null, qod_vars.home_url + '/' + post.slug);

        let source = data[0]._qod_quote_source;
        let sourceUrl = data[0]._qod_quote_source_url;
        let content = data[0].content.rendered;
        let author = data[0].title.rendered;

        $('.entry-content').html(content);
        $('.entry-title').html(`&mdash; ${author}`);

        if (source && sourceUrl) {
          $('.source').html(`, <a href=' ${sourceUrl} ' > ${source} </a> `);
        } else if (source && !sourceUrl) {
          $('.source').html(',  ' + source);
        } else {
          $('.source').html('');
        }
      })
      .fail(function(error) {
        console.log('an error occured', error);
      }); // $.ajax

      // update the page when we click the forward and back buttons
      $(window).on('popstate', function() {
        window.location.replace(lastPage)
      })
  });

  $('#submit-quote-btn').on('click', function(event) {
    event.preventDefault();

    console.log('click!');

    $.ajax({
      // post a new quote using the post method
      method: 'POST',
      url: qod_vars.rest_url + 'wp/v2/posts/',
      data: {
        title: $('#quote-author').val(),
        content: $('#quote-content').val(),
        _qod_quote_source: $('#quote-source').val(),
        _qod_quote_source_url: $('#quote-source-url').val(),
        status: 'pending'
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
      }
    })

      .done(function() {
        $('#quote-submission-form').slideUp(function() {
          $('.entry-title').append(
            '<p>Thanks, your quote submission was received!</p>'
          );
        });
      })
      .fail(function(error) {
        console.log('an error occured', error);
      });
  });
})(jQuery); //<--- IIFE - Immediately Invoked Function Expression


