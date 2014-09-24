SMRController = RouteController.extend({
  template: 'smr',
  onRun: function () {
    if (!Meteor.user()){
      ga('send', 'pageview')
    }
  }
})