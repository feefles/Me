$(function() {
	$('#content').html($('#aboutDiv').html());

	$('#about').click(function() {
		$('#content').html($('#aboutDiv').html());
	})
	$('#education').click(function() {
		$('#content').html($('#educationDiv').html());
	})
	$('#projects').click(function() {
		$('#content').html($('#projectDiv').html());
	})
});