function sitemap(){
  $('#sitemap_btn').click(function(){
    $('.sitemap').toggle();
    var imgSrc=$('#sitemap_btn');
    if(imgSrc.attr('src')=='images/hamburger.png'){
      imgSrc.attr('src','images/close.png');
    }else{
      imgSrc.attr('src','images/hamburger.png');
    }
  });
}