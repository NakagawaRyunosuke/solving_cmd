$("#nibun").click(function(){
    $(".nibunGraph").removeClass("hidden");
    $(".newtonGraph").addClass("hidden");
    $("#nibunInputs").removeClass("hidden");
    $("#newtonInputs").addClass("hidden");
    $("#nibun").css("background-color","rgba(0, 0, 0, 0.296)");
    $("#newton").css("background-color","white");
});

$("#newton").click(function(){
    $(".newtonGraph").removeClass("hidden");
    $(".nibunGraph").addClass("hidden");
    $("#newtonInputs").removeClass("hidden");
    $("#nibunInputs").addClass("hidden");
    $("#nibun").css("background-color","white");
    $("#newton").css("background-color","rgba(0, 0, 0, 0.296)");
});

$("#NI_aBtn").click(function(){
    $("#NI_aValue").text($("#NI_aNum").val());
});

$("#NI_bBtn").click(function(){
    $("#NI_bValue").text($("#NI_bNum").val());
});

$("#NE_aBtn").click(function(){
    $("#NE_aValue").text($("#NE_aNum").val());
});

$("#NE_btn1").click(function() {
  $("#NE_btn1").css({"color":"red"});
  $("#NE_btn2").css({"color":""});
  $("#NE_btn3").css({"color":""});
});
  
$("#NE_btn2").click(function() {
    $("#NE_btn2").css({"color":"red"});
    $("#NE_btn3").css({"color":""});
    $("#NE_btn1").css({"color":""});
});

$("#NE_btn3").click(function() {
    $("#NE_btn3").css({"color":"red"});
    $("#NE_btn1").css({"color":""});
    $("#NE_btn2").css({"color":""});
});

$("#NI_btn1").click(function() {
    $("#NI_btn1").css({"color":"red"});
    $("#NI_btn2").css({"color":""});
    $("#NI_btn3").css({"color":""});
});
  
$("#NI_btn2").click(function() {
    $("#NI_btn2").css({"color":"red"});
    $("#NI_btn3").css({"color":""});
    $("#NI_btn1").css({"color":""});
});

$("#NI_btn3").click(function() {
    $("#NI_btn3").css({"color":"red"});
    $("#NI_btn1").css({"color":""});
    $("#NI_btn2").css({"color":""});
});