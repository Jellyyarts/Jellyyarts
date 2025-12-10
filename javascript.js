$(document).ready(function(){

$(function(){ //FEATURED
  $("#contentlaharbolt, #contentmarx, #contentsenku, #contentfreed").hide();
  $("#collapsefreed").click(function(){
    $("#contentfreed").toggle();
  });
  $("#collapselaharbolt").click(function(){
    $("#contentlaharbolt").toggle();
  });
  $("#collapsemarx").click(function(){
    $("#contentmarx").toggle();
  });
  $("#collapsesenku").click(function(){
    $("#contentsenku").toggle();
  });

});  
$(function(){ //TABS

$(".tabcontent").hide();
  $("#dig_freetab").click(function(){
    $("#Dig_Free").toggle();
    $("#dig_freetab").toggleClass ("tabbuttonstyle");
    $("#Dig_Manga").hide();
    $("#dig_mangatab").removeClass ("tabbuttonstyle");
    $("#Dig_WIP").hide();
    $("#dig_wiptab").removeClass ("tabbuttonstyle");
    $("#Phys_Free, #Phys_WIP, #Cam_Free, #Cam_Study").hide();
    $("#phys_freetab, #phys_wiptab, #cam_freetab, #cam_studytab").removeClass ("tabbuttonstyle")
  });
  $("#dig_mangatab").click(function(){     
    $("#Dig_Free").hide();
    $("#dig_freetab").removeClass ("tabbuttonstyle");
    $("#Dig_Manga").toggle();
    $("#dig_mangatab").toggleClass ("tabbuttonstyle");
    $("#Dig_WIP").hide();
    $("#dig_wiptab").removeClass ("tabbuttonstyle");
    $("#Phys_Free, #Phys_WIP, #Cam_Free, #Cam_Study").hide();
    $("#phys_freetab, #phys_wiptab, #cam_freetab, #cam_studytab").removeClass ("tabbuttonstyle")
  });
  $("#dig_wiptab").click(function(){
    $("#Dig_Free").hide();
    $("#dig_freetab").removeClass ("tabbuttonstyle");
    $("#Dig_Manga").hide();
    $("#dig_mangatab").removeClass ("tabbuttonstyle");
    $("#Dig_WIP").toggle();
    $("#dig_wiptab").toggleClass ("tabbuttonstyle");    
    $("#Phys_Free, #Phys_WIP, #Cam_Free, #Cam_Study").hide();
    $("#phys_freetab, #phys_wiptab, #cam_freetab, #cam_studytab").removeClass ("tabbuttonstyle")
  });

  $("#phys_freetab").click(function(){
    $("#Phys_Free").toggle();
    $("#phys_freetab").toggleClass ("tabbuttonstyle");
    $("#Phys_WIP").hide();
    $("#phys_wiptab").removeClass ("tabbuttonstyle");
    $("#Dig_Free, #Dig_Manga, #Dig_WIP, #Cam_Free, #Cam_Study").hide();
    $("#dig_freetab, #dig_mangatab, #dig_wiptab, #cam_freetab, #cam_studytab").removeClass ("tabbuttonstyle")
  });
  $("#phys_wiptab").click(function(){
    $("#Phys_Free").hide();
    $("#phys_freetab").removeClass ("tabbuttonstyle");
    $("#Phys_WIP").toggle();
    $("#phys_wiptab").toggleClass ("tabbuttonstyle");
    $("#Dig_Free, #Dig_Manga, #Dig_WIP, #Cam_Free, #Cam_Study").hide();
    $("#dig_freetab, #dig_mangatab, #dig_wiptab, #cam_freetab, #cam_studytab").removeClass ("tabbuttonstyle")
  });

  $("#cam_freetab").click(function(){
    $("#Cam_Free").toggle();
    $("#cam_freetab").toggleClass ("tabbuttonstyle");
    $("#Cam_Study").hide();
    $("#cam_studytab").removeClass ("tabbuttonstyle");
    $("#Dig_Free, #Dig_Manga, #Dig_WIP, #Phys_Free, #Phys_WIP").hide();
    $("#dig_freetab, #dig_mangatab, #dig_wiptab, #phys_freetab, #phys_wiptab").removeClass ("tabbuttonstyle")
  });
  $("#cam_studytab").click(function(){
    $("#Cam_Free").hide();    
    $("#cam_freetab").removeClass ("tabbuttonstyle");
    $("#Cam_Study").toggle();
    $("#cam_studytab").toggleClass ("tabbuttonstyle");
    $("#Dig_Free, #Dig_Manga, #Dig_WIP, #Phys_Free, #Phys_WIP").hide();
    $("#dig_freetab, #dig_mangatab, #dig_wiptab, #phys_freetab, #phys_wiptab").removeClass ("tabbuttonstyle")
  });

});

$(function(){ //RECENTS

 $(".toggle-img").on("click", function () {
    const img = $(this);
    const current = img.attr("src");
    const alt = img.data("alt");

    // swap them
    img.attr("src", alt);
    img.data("alt", current);
});
 
});

$(function(){ //MISC

  $("#Submit").click(function(){
    alert("Thank you for filling this out! Expect a response between 1-2 days for more information on your request.");
  });

});
});
 //at tablet size make recents be click instead of hover and replace p with one saying click