PricingController = RouteController.extend({
  template: 'pricing',
  onRun: function () {
    if (!Meteor.user()){
      ga('send', 'pageview')
    }
  }
})