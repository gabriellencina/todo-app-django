$(document).ready(function () {
    
    var baseUrl = 'http://127.0.0.1:8000/';
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');
    var filter =  $('#filter');

    $(deleteBtn).on('click', function (e) {
        e.preventDefault();

        var de1Link = $(this).attr('href');
        var result = confirm('Do you really want to delete this task?');

        if (result) {
            window.location.href = de1Link;
        }
    });

    $(searchBtn).on('click', function () {
        searchForm.submit();
    });


    $(filter).change(function() {
        
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter; 
    });


    

});
