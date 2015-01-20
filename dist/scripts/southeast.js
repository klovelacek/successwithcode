// ======== Flordia ========================
$(function(){
$('.flordiaInfo').hide();

$('.flordia a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.flordiaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.georgiaInfo').hide();

$('.georgia a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.georgiaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.alabamaInfo').hide();

$('.alabama a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.alabamaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.mississippiInfo').hide();

$('.mississippi a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.mississippiInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.louisianaInfo').hide();

$('.lousiana a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.louisianaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.sCarolinaInfo').hide();

$('.sCarolina a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.sCarolinaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.nCarolinaInfo').hide();

$('.nCarolina a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.nCarolinaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.tennesseeInfo').hide();

$('.tennessee a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.tennesseeInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.kentuckyInfo').hide();

$('.kentucky a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('kentuckyInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.virginiaInfo').hide();

$('.virginia a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.virginiaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.arkansasInfo').hide();

$('.arkansas a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.arkansasInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});
});
