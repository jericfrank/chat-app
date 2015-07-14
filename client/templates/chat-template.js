Template.appChat.helpers({
	Messages: function(){

		return Messages.find({}, {sort: {createdAt: -1}, limit: 5}) 
		
	}


});

Template.appChat.events({

	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event){
		if(event.keyCode == 13){
			
			var n = $(".txtName").val();

			if(n == ''){
				alert('Username is Required!');
			}
			else{
				Messages.insert({
				name: $(".txtName").val(),//database
				text: $(".txtText").val(),
				createdAt: new Date()
			})

			$(".txtText").val('');
			$(".txtText").focus();
			}

		}

		return false;
	}


});