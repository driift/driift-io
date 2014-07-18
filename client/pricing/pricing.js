PricingController = RouteController.extend({
  template: 'pricing',
  onRun: function () {
    if (!Meteor.user()){
      ga('send', 'pageview')
    }
  }
})

Template.pricing.rendered = function() {
 $('input[data-rangeslider]').rangeslider({

    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {},

    // Callback function
    onSlide: function(position, value) {
      var discount = [5,10,15,20];
      $('.pricing-attedees').text(value)
      if(value > 500)
        $('.pricing-discount').text(discount[0] + '%')
      if(value > 1000)
        $('.pricing-discount').text(discount[1] + '%')
      if(value > 5000)
        $('.pricing-discount').text(discount[2] + '%')
      $('.pricing-total').text('£' + value*12)
    },

    // Callback function
    onSlideEnd: function(position, value) {}
  });
}