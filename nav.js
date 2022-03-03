$(function(){
	function changeFontColor()
	{
		$('#home').toggleClass('none');
		$('#home').removeClass('ssslid');
	
		
	}
	function changeBlockNone()
	{
		$('#home').toggleClass('ssslid');
	
		
	}
	$('#burgermenu').on('click', function(){		
		changeFontColor();	
		
	});
	
	$('#closem').on('click', function(){		
		changeBlockNone();	
		setTimeout(changeFontColor, 1000);	
		
	});
	
});