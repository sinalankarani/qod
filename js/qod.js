// get request to grab random post and append to the DOM
(function($) {

  let newQuoteBtn = document.getElementById('new-quote-button');
  
  // add a click event for the "Show Me Another" btn and then run the AJAX code below
    $(newQuoteBtn).on('click', function loadAjax() {

    $.ajax({
        // get a new quote using the GET method
      method: 'GET',
      url:
        qod_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        $('.entry-content').html(data[0].content.rendered);
        $('.entry-meta').html(data[0].title.rendered);
        console.log(qod_vars.rest_url)
      })
      .fail(function(error) {
        console.log('an error occured', error);
      });
  });


$("#submit-quote-btn").on('click', function(event) {
    event.preventDefault();

    console.log('click!');

  $.ajax({
      // post a new quote using the post method
    method: 'POST',
    url: qod_vars.rest_url + 'wp/v2/posts/', 
    data: {
        title: $("#quote-author").val(),
        content: $("#quote-content").val(),
        _qod_quote_source: $("#quote-content").val(),
        _qod_quote_source_url: $("#quote-source-url").val(),
        status: "pending"
    },
    beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
    }
  })

    .done(function() {
        $('#quote-submission-form').slideUp(function(){

        })
    })
    .fail(function(error) {
      console.log('an error occured', error);
    });
});
})(jQuery);

// IIFE - Immediately Invoked Function Expression