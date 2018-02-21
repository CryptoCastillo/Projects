//Check Off Specific Tools By Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//CLick on X to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops all other listeners from firing
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		console.log("you hit enter!")
	}
});