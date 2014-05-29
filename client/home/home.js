HomeController = RouteController.extend({
  template: 'home',
  onRun: function(){
    if (!Meteor.user()){
      ga('send', 'pageview')
    }
  }
})

Template.home.events({
  'submit': function (evt, tmpl) {
    evt.preventDefault()

    var email = $('#input-email').val()

    if(email) {

      Emails.insert({
        email: email,
        createdAt: Date.now()
      })

      ga('send', 'event', 'submit', 'email');

    } else {
      console.error('No email provided')
      ga('send', 'event', 'submit', 'emailerror');
    }
  }
})