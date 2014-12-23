$(function() {
    // $('#content').html($('#aboutDiv').html());
    $('#about').addClass('selected');
    $('#about').find('span').css('display', 'inline-block');


    $('#about').click(function() {
    	if ($('#aboutDiv').css('display') == "none") {
    		$('#content').children().fadeOut(0);
    		$('#aboutDiv').fadeIn();
    	}
    })
    $('#education').click(function() {
    	if ($('#educationDiv').css('display') == "none") {
	    	$('#content').children().fadeOut(0);
	    	$('#educationDiv').fadeIn();
	    }
    })
    $('#projects').click(function() {
		if ($('#projectDiv').css('display') == "none") {
	    	$('#content').children().fadeOut(0);
	    	$('#projectDiv').fadeIn();
	    }    })

    $('#navigation i').click(function() {
    	$('#navigation i').removeClass('selected');
        $('#navigation i').find('span').css('display', 'none');


    	$(this).addClass('selected');
    	$(this).find('span').css('display', 'inline-block');

    })

    $('#skillsBar div, #skillsBar2 div').hover(function() {
        $('#skill').text($(this).attr('disp'));
        $('#skill').animate({'opacity':1, 'queue': false}, {
            'duration':100});

    }, function() {
        $('#skill').animate({'opacity':0}, {'duration':100, 'queue': false});
    });


    $('#navigation i').hover(function() {
        $(this).find('span').css('display', 'inline-block');
    }, function() {
    	if ($(this).hasClass('selected')) return;
        $(this).find('span').css('display', 'none');

    })

    var s = skrollr.init();

});
