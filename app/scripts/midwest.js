$(function(){
  $('.ohioInfo').hide();

  $('.ohio a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.ohioInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.michiganInfo').hide();

  $('.michigan a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.michiganInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.indianaInfo').hide();

  $('.indiana a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.indianaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.minnesotaInfo').hide();

  $('.minnesota a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.minnesotaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.iowaInfo').hide();

  $('.iowa a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.iowaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.illinoisInfo').hide();

  $('.illinois a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.illinoisInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.missouriInfo').hide();

  $('.missouri a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.missouriInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.kansasInfo').hide();

  $('.kansas a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.kansasInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.nebraskaInfo').hide();

  $('.nebraska a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.nebraskaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.sDakotaInfo').hide();

  $('.sDakota a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.sDakotaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.nDakotaInfo').hide();

  $('.nDakota a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.nDakotaInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.wisconsinInfo').hide();

  $('.wisconsin a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.wisconsinInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });

  $('.kentuckyInfo').hide();

  $('.kentucky a').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active').siblings('section').hide();
    } else {
      $('a').removeClass('active');
      $('.kentuckyInfo').hide();
      $(this).addClass('active').siblings('section').show();
    }
  });
});
