$(function() {
    $('#content').html($('#aboutDiv').html());

    $('#about').click(function() {
        $('#content').fadeOut(0).html($('#aboutDiv').html()).fadeIn(200);
    })
    $('#education').click(function() {
        $('#content').html($('#educationDiv').html());
    })
    $('#projects').click(function() {
        $('#content').html($('#projectDiv').html());
    })

    $('#navigation i').click(function() {
    	$('#navigation i').removeClass('selected');
        $('#navigation i').find('span').css('display', 'none');


    	$(this).addClass('selected');
    	$(this).find('span').css('display', 'inline-block');

    })


    $('#navigation i').hover(function() {
        $(this).find('span').css('display', 'inline-block');
    }, function() {
    	if ($(this).hasClass('selected')) return;
        $(this).find('span').css('display', 'none');

    })
});
