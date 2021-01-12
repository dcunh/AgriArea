$('.tabing ul li a').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var tabcont = $(this).attr('href');
    console.log(tabcont);
    $('.tabing a').removeClass('active');
    $(this).addClass('active');
    $('.tab1').hide();
    $(tabcont).show();
});