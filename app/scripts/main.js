// Place SVG maps in HTML pages

// ================ NATIONAL ===================

$(function(){

  $("#nationalMap").load('images/nationalMap.svg', function(response){
    $(this).addClass("nationalMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});

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
