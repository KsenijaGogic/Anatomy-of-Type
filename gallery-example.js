$(function() { // Start document ready

	// On click in div.previews, change div.full to match selected item (full size src image live in
	//	data-full for each thumbnail)
     
	// call 'a' in div w/ class of preview
	// on click, run function(calling event 'e')
	// var src gets the data "src" from the click item (this)
	// call on img w/ class of previewFull

	// **** WE GOT RID OF 'e' IN FUNCTION


      $('.previews a').on('click',function(e){
       	e.preventDefault();
       	// DON'T BREAK IT But here's the working code
        
        // var fullImgLink = $(this).data('full');

        var fullImgLink = $(this).attr('href');
        console.log(fullImgLink);
        $('img.previewFull').attr('src',fullImgLink);

        var textChange = $(this).data('h'); 
        $('div.title').html(textChange);


        var description = $(this).data('p');
        $('div.body').html(description);

        var link = $(this).attr('href');
        $('a.fancybox').attr('href', link);

        $('.hidden').hide();

        // JOHN I wrote an extra line of code here -- 
        // I filled in the h2, h4 and p for "typography" when the page loads,
        // gave then a class of hidden
        // now in the above script I'm saying, on the click of that "a",
        // look for something with a class of "hidden" and hide it -- that's it
        // easy-peasey lemon squeezey

      });



    }); // End document ready

	//call div with a class of previews that has an anchor tag in it.
	// on click run function (event)
	//create var called fullimglink for selected a pick up data type full - this could be anything)
	// call any img with a class of previewfull 
	// then, within its attributes, 
	//  var src = $(this).data('src'); -  look for an attribute type 'src', 
	//  $('img.previewFull').attr('src',src); - and change the attribute of 'src' to equal var fullImgLink