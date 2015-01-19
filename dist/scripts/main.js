// $(document).ready(function)(){
//
//   $('.bubblelogo').mouseover(function(){
//
//   div= $('bubblelogo');
//
//   div.stop().animate({visibility: visible}, 150);
//
//   }).mouseout(function(){
//
//
//   div.stop().animate({visibility: hidden}), 150);
//
//   });
//
//   });


// -------------------------------

// var $reveal= $('#OK'),
//     $resource = $('#resource'),
//     visible = true;






// Place SVG maps in HTML pages

// ================ NATIONAL ===================

$(function(){

  $("#stageNAT").load('images/map_national.svg', function(response){
    $(this).addClass("nationalMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});


// $("svg").removeClass(function(){
//   return $(this).prev().attr("regLogo");
// });


// ================= NEEP ======================

$(function(){

  $("#stageNE").load('images/map_neep.svg', function(response){
    $(this).addClass("northeastMapNE");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});

// ================ SEEA =====================

$(function(){

  $("#stageSE").load('images/map_seea.svg', function(response){
    $(this).addClass("southeastMapSE");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});


// ============= MEEA =====================

$(function(){

  $("#stageMW").load('images/map_meea.svg', function(response){
    $(this).addClass("midwestMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});

// ======== SPEER ========================

$(function(){

  $("#stageSC").load('images/map_speer.svg', function(response){
    $(this).addClass("southcentralMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});

// ======== SWEEP ========================

$(function(){

  $("#stageSW").load('images/map_sweep.svg', function(response){
    $(this).addClass("southcentralMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});


// ======== NEEA ========================

$(function(){

  $("#stageNW").load('images/map_neea.svg', function(response){
    $(this).addClass("northwestMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});


// ======== WEST VIRGINIA ========================

$(function(){

  $("#stageWV").load('images/map_WV.svg', function(response){
    $(this).addClass("westvirginiaMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});


// ======== CALIFORNIA ========================

$(function(){

  $("#stageCA").load('images/map_CA.svg', function(response){
    $(this).addClass("californiaMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});
