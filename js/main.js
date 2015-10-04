

//Responsive Navigation
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('.site-nav-container'),
    $menulink = $('.menu-link'),
    $menuTrigger = $('.menu-item-has-children > a'),
    
    
    $siteWrap = $('.site-wrap');

 

  $menulink.click(function(e) {
    e.preventDefault();
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    $siteWrap.toggleClass('nav-active');
  });

  $menuTrigger.click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active').next('ul').toggleClass('active');
  });

});



