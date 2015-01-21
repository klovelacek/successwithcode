<<<<<<< HEAD

// Place SVG maps in HTML pages

// ================ NATIONAL ===================

$(function(){

  $("#stageNAT").load('images/map_national2.svg', function(response){
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
=======
// $(document).ready(function() {

// $(function() {
//
// function MM_findObj(n, d) { //v4.01
//   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
//     d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
//     if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
//     for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
//     if(!x && d.getElementById) x=d.getElementById(n); return x;
//   }
//   function MM_swapImage() { //v3.0
//     var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
//     if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
//   }
//   function MM_preloadImages() { //v3.0
//     var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//       var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//       if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }});

  $(function(){

    $("#nationalMap").load('images/nationalMap.svg', function(response){
      $(this).addClass("nationalMap");

      if(!response){
          $(this).html('Error loading SVG');
      }
    });
>>>>>>> master
  });
});


// ======== CALIFORNIA ========================

<<<<<<< HEAD
$(function(){

  $("#stageCA").load('images/map_CA.svg', function(response){
    $(this).addClass("californiaMap");

    if(!response){
      $(this).html('Error loading SVG');
    }
  });
});
=======
  $(function(){

  $("#stageNE").load('images/map_neep.svg', function(response){
       $(this).addClass("northeastMapNE");

      if(!response){
        $(this).html('Error loading SVG');
      }
    });
  });

  $(function(){

    $("#stageSE").load('images/map_seea.svg', function(response){
      $(this).addClass("southeastMapSE");

      if(!response){
        $(this).html('Error loading SVG');
      }
    });
  });
// });
>>>>>>> master
