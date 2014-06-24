HomeController = RouteController.extend({
  template: 'home',
  onRun: function(){
    if (!Meteor.user()){
      ga('send', 'pageview')
    }
  }
})

Template.home.helpers({
  email: function () {
    return Session.get('email')
  }
})

Template.home.events({
  'click .btn-hero, click .nav-menu li': function(){
    $('#modal-subscribe').trigger('show')
  },
  'submit .register': function (evt, tmpl) {
    evt.preventDefault()

    var email = $('#input-email').val()

    if(email) {
      Session.set('email', email)

      Emails.insert({
        email: email,
        createdAt: Date.now()
      })

      ga('send', 'event', 'submit-email', email)

    } else {
      console.error('No email provided')
      ga('send', 'event', 'submit-email-error')
    }
  }
})