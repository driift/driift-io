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
    onSlide: function(position, value) {},

    // Callback function
    onSlideEnd: function(position, value) {}
  });
}