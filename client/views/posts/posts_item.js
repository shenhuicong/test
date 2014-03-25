Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    var span = document.createElement('span');
    span.id = this.submitted;
    return a.hostname,span.id;
  }
});