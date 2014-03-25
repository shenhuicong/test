Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()      
    }

    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);

      Router.go('postsList', {_id: id});
    });
  }
});