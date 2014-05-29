Meteor.publish('everything', function(){
  return [Emails.find()]
})