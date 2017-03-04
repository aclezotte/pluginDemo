$(function(){
    
    $('#complexify #password').complexify({}, function (valid, complexity) {
		$('#complexify #complexity').text('Password strength: ' + Math.round(complexity) + '%');
	});
	
	// To attach Backstrech as the body's background
    $.backstretch("images/ringNebula.jpg");

    // // You may also attach Backstretch to a block-level element
    // $(".foo").backstretch("path/to/image.jpg");
    
    // // Or, to start a slideshow, just pass in an array of images
    // $(".foo").backstretch([
    // "path/to/image.jpg",
    // "path/to/image2.jpg",
    // "path/to/image3.jpg"
    // ], {duration: 4000});
    
});