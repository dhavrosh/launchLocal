$(document).ready(function(){
      $('.slider-comment').slick({
     infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
		  arrows: false,
		centerMode: true,
		   dots: true,
            responsive: [
							  {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2,
        infinite: true,
      }
    },
				{
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
		  centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
	
	

    new Chartist.Bar('.ct-chart', {
  labels: ['<span class="wrapper-img-diagram"><img src="img/icon-logo.png" class="img-responsive"/></span>', 
		   '<span class="wrapper-img-diagram"><img src="img/icon-casper.png" class="img-responsive"/></span>', 
		   '<span class="wrapper-img-diagram"><img src="img/icon-leesa.png" class="img-responsive"/></span>',
		   '<span class="wrapper-img-diagram"><img src="img/icon-purple.png" class="img-responsive"/></span>',
		   '<span class="wrapper-img-diagram"><img src="img/icon-gh.png" class="img-responsive"/></span>',
		   '<span class="wrapper-img-diagram"><img src="img/icon-lull.png" class="img-responsive"/></span>', 
		   '<span class="wrapper-img-diagram"><img src="img/icon-yoga.png" class="img-responsive"/></span>'],
  series: [
    [5000, 600, 180, 160, 80, 40, 10],
    [500, 100, 60, 50, 20, 0, 0]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value);
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});


  
	

});




