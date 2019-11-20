(function($) {

    // your code goes here

    // 1. get request to grab random post and append to the DOM

    // add a click event for the "Show Me Another" btn and then run the AJAX code below
    $.ajax({
        method: "GET",
        url: qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'

    }). done(function() {
        console.log(data);

    }).fail(function(error) {
        console.log("an error occured", error);
    });

    // 2. post a new quote using the post method
    // using a form to submit a quote so a .submit event

})(jQuery)

// IIFE - Immediately Invoked Function Expression
