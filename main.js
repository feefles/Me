$(function() {
    // $('#content').html($('#aboutDiv').html());

    $('#about').click(function() {
    	if ($('#aboutDiv').css('display') == "none") {
    		$('#content').children().fadeOut();
    		$('#aboutDiv').fadeIn();
    	}
   
        // $('#content').fadeOut(0).html($('#aboutDiv').html()).fadeIn(200);
    })
    $('#education').click(function() {
    	// if ($('#educationDiv').css('display') == "none") {
	    	$('#content').children().fadeOut();
	    	$('#educationDiv').fadeIn();
	    // }
    })
    $('#projects').click(function() {
		if ($('#projectDiv').css('display') == "none") {
	    	$('#content').children().fadeOut();
	    	$('#projectDiv').fadeIn();
	    }    })

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
