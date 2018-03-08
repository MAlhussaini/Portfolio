  // #TODO When scrolling down the header shrinks to 100px and reverts back at the top of the page  
  $(window).on("scroll touchmove", function () {
    $('.header').toggleClass('header-small', $(document).scrollTop() > 0);
    $('.info').toggleClass('info-noshow', $(document).scrollTop() > 0);
    $('.skills').toggleClass('skills-noshow', $(document).scrollTop() > 0);
    $('.description').toggleClass('description-small', $(document).scrollTop() > 0);
    $('.title').toggleClass('title-small', $(document).scrollTop() > 0);
    $('.nav').toggleClass('nav-small', $(document).scrollTop() > 0);
  });

  // On small screens when the hamburger icon is clicked the menu is showed on top of the header
  $(document).ready(function(){
    $(".menu-icon-small").on("click", function(){
      if($(".menu-small").length == 0){
        console.log($(".menu-small").length)
        $(".header").append("<ul class='menu-small'>");
        $(".menu-small").append("<li><a href='/projects/portfolio'>HOME</a></li>");
        $(".menu-small").append("<li><a href='#'>CV</a></li>");
        $(".menu-small").append("<li><a href='https://www.emares.ro/despre-mine/'>About</a></li>");
        $(".header").append("</ul>");
      }else {
        $(".menu-small").remove();
      }
    });
  });