 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}
  else
  {
 $(function() {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.JPG','10.jpg','11.jpg','12.JPG','13.jpg','14.JPG','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg'];
    $('#background').css({'background-image': 'url(Images/' + images[Math.floor(Math.random() * images.length)] + ')'});
   });
   }