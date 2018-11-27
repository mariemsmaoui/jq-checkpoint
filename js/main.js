

$(document).ready(function(){   
    $('body').css('background','red')

  function changeFont(){
    let font = $("#font").val();
    $("#paragraph").css("fontFamily", font) }
})
function bold(){
	let fontWeight = $("#paragraph").css("fontWeight")
	if (fontWeight== "normal")  {
		$("#paragraph").css("fontWeight", "bold");
	}else{
		$("#paragraph").css("fontWeight","normal")
    }
}
function italic(){
	let fontStyle = $("#paragraph").css("fontStyle")
	if (fontStyle== "normal") {
		$("#paragraph").css("fontStyle", "italic");
	}else{
		$("#paragraph").css("fontStyle","normal")
	}

}
function underline(){
    let textDecoration = $("#paragraph").css("textDecoration")
    if (textDecoration=="none solid rgb(0, 0, 0)") {
        $("#paragraph").css("textDecoration", "underline");
    } else {
        $("#paragraph").css('textDecoration', "none solid rgb(0, 0, 0)")
    }
}

$("#font").change(changeFont)
$(".haha").click(bold)
$(".hoho").click(italic)
$(".hihi").click(underline)
