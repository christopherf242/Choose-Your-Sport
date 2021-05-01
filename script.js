$("#francisco-lindor-picture").hide();
$("#francisco-lindor-picture").hide();
$("#kyrie-irving-picture").hide();
$(".play-mlb-season").hide();
$(".play-nba-season").hide();
$("#clayton-kershaw-picture").hide();
$("#lebron-kyrie-pic").hide();
$("#jarrett-allen-picture").hide();
$("#curtis-granderson-celebrate").hide();
$(".return-home").hide();

//When I click on the Chosen baseball button, the result is that I hide the donovan mitchell picture from the home page by doing: $("#donovan-mitchell-picture").hide().
$(".chosenBaseball").click(function(){
    $("#choices").hide();
    $("#donovan-mitchell-picture").hide();
    $(".picture-description").hide();
    $(".content").text("You've been selected to play for the New York Mets. Let's Go New York Mets!");
    $("#francisco-lindor-picture").show();
    $(".play-mlb-season").show();
     });

$(".play-mlb-season").click(function(){
    $("#francisco-lindor-picture").hide();
    $("#clayton-kershaw-picture").show();
    $(".play-mlb-season").hide();
	$(".content").text("You're in the World Series facing the Los Angeles Dodgers pitcher named Clayton Kershaw. Try to hit the curveball!");
});

$(".chosenBasketball").click(function(){
    //Notes: Below, we do the same thing as doing the hide action
    $("#choices").hide();
    //Notes: Let's show the text
    $(".content").text("You've been selected to play for the Brooklyn Nets. Let's Go Brooklyn Nets!");
    $("#donovan-mitchell-picture").hide();
    $(".picture-description").hide();
    $("#kyrie-irving-picture").show();
    $(".play-nba-season").show();
});

$(".play-nba-season").click(function(){
    $("#kyrie-irving-picture").hide();
    $("#lebron-kyrie-pic").show();
    $(".content").text("The Nets are winning by 1 point with 10 seconds left. Lebron James has the ball and he's getting ready to try to score and win the game for the lakers. Double click on the picture to try to block the ball!");
    $(".play-nba-season").hide();
    
});

$(".playing-defense").dblclick(function(){
    //Notes: Let's show the text
    $("#lebron-kyrie-pic").hide();
    $(".content").text("You blocked Lebron James' dunk! The Nets win the NBA championship! ");
    $("#jarrett-allen-picture").show();
    $(".return-home").show();
    
});

$("#clayton-kershaw-picture").dblclick(function(){
    //Notes: Let's show the text
    $("#clayton-kershaw-picture").hide();
    $(".content").text("You hit a home run! Mets win the game and the World Series!");
    $("#curtis-granderson-celebrate").show();
    $(".return-home").show();
});

$(".return-home").click(function(){
    //Now we have to hide that restart button that we clicked on(that has the return-home class)
    $(".return-home").hide();
    /*
    $(".play-mlb-season").show();
	$(".play-nba-season").show();
    */
    $("#choices").show();
    $("#donovan-mitchell-picture").show();
    $(".picture-description").show();
    //Now we'll hide the pictures from the previous step(depending if we chose to play baseball or basketball)
    $("#jarrett-allen-picture").hide();
    $("#curtis-granderson-celebrate").hide();
    $(".content").text("");
});
