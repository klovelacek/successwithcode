$(function(){
$('.maineInfo').hide();

$('.maine a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.maineInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.newHampshireInfo').hide();

$('.newHampshire a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.newHampshireInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.vermontInfo').hide();

$('.vermont a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.VermontInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.massInfo').hide();

$('.mass a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.massInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.rhodeIslandInfo').hide();

$('.rhodeIsland a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.rhodeIslandInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.connecticutInfo').hide();

$('.connecticut a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.connecticutInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.newJerseyInfo').hide();

$('.newJersey a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.newJerseyInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.marylandInfo').hide();

$('.maryland a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.marylandInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.pennsylvaniaInfo').hide();

$('.pennsylvania a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.pennsylvaniaInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});

$('.newYorkInfo').hide();

$('.newYork a').on('click', function(){
  if($(this).hasClass('active')) {
    $(this).removeClass('active').siblings('section').hide();
  } else {
    $('a').removeClass('active');
    $('.newYorkInfo').hide();
    $(this).addClass('active').siblings('section').show();
  }
});
});
