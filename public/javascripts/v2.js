$(".circle").hover(
    function () {
    	if(!$(this).hasClass('open')) {
        	$(this).removeClass('out').addClass('in');
        }
    },
    function () {
    	if(!$(this).hasClass('open')) {
        	$(this).removeClass('in').addClass('out');
        }
    }
);


$('#me').click(function() {
	if($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('#aboutMe').removeClass('open');
		$('.circle.not').removeClass('small');
	} else {
		$(this).addClass('open');
		$('#aboutMe').addClass('open');
		$('.circle.not').addClass('small');
	}
});

$('.circle').hover(
	function() {
		if(!$(this).hasClass('small')) {
			var id = $(this).attr('id');
			if(id == 'facebook') {
				$('body').css('background', '-webkit-linear-gradient(bottom, rgba(58, 88, 152, 0), rgba(58, 88, 152, 0) 60%, rgba(58, 88, 152, .5)');
			} else if (id == 'github') {
				$('body').css('background', '-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .5)');			
			} else if (id == 'instagram') {
				$('body').css('background', '-webkit-linear-gradient(bottom, rgba(46, 94, 134, 0), rgba(46, 94, 134, 0) 60%, rgba(46, 94, 134, .5)');
			} else if (id == 'twitter') {
				$('body').css('background', '-webkit-linear-gradient(bottom, rgba(54, 185, 255, 0), rgba(54, 185, 255, 0) 60%, rgba(54, 185, 255, .5)');	
			} else if (id == 'spotify') {
				$('body').css('background', '-webkit-linear-gradient(bottom, rgba(128, 183, 24, 0), rgba(128, 183, 24, 0) 60%, rgba(128, 183, 24, .5)');					
			}
		}
	},
	function() {
		$('body').css('background', 'white');
	}
);