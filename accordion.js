$('.js-accordion__header').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.parent().hasClass('show')) {
        $this.parent().removeClass('show');
    } else {
        $('.js-accordion__card').removeClass('show');
        $this.parent('.js-accordion__card').addClass('show');
    }
});