Meteor.publish('posts', function() {
	function getDateStr(){
    	var dd = new Date();
    	var y = dd.getFullYear();
    	var m = dd.getMonth()+1;
    	var d = dd.getDate();
    	return y+'-'+m+'-'+d;

    }	
  return Posts.find({"submitted":getDateStr()});
});