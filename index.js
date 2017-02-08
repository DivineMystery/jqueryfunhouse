
$(document).ready( function(){
    $('#change-color').click(function(){
        $('body').css("background-color","red");
    
    });

$("#submit-name").click(function() { var name = $("#name").val()
$("#greeting").html("HI, " + $("#name").val() );
    });
});