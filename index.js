var p1Score = 0;
var p2Score = 0;
var ties =0;
var turn = 1;


function winning(val){
    if($(".row1.box." +val).length===3
    ||$(".row2.box." +val).length===3
    ||$(".row3.box." + val).length===3
    ||$(".col1." + val).length===3
    ||$(".col2." + val).length===3
    ||$(".col3."+val).length===3
    ||($("#1").hasClass(val)&&
    $("#5").hasClass(val)&&
    $("#9").hasClass(val))
    ||($("#3").hasClass(val)&&
    $("#5").hasClass(val)&&
    $("#7").hasClass(val))){
        return true
    }
}



$(".box").click(function(){
    if(turn===1){
        $(this).text("x")
        $(this).addClass("x")
        turn= 2
        if(winning("x")){
            p1Score++;
            $("#1wins").text(p1Score);
            $(".box").empty();
        }

    }else{
        $(this).text("o")
        $(this).addClass("o")
        turn= 1
        if(winning("o")){
            p2Score++;
            $("#2wins").text(p2Score);
            $(".box").empty();
        }
    }
    $("#turn").text(turn)
    

})