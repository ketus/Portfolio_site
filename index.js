$(document).ready(function(){
  //current copyright year
  var date = new Date().getFullYear();  
  $('.lefty').html('Copyright &copy; 2014 - ' + date + '. Twisted Design Studio');
  
  //scroll smoothly
  $('#scrolltop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
