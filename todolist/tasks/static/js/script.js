$(document).ready(function () {

    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');

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



    

});
