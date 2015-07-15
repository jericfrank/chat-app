Handlebars.registerHelper("prettifyDate", function(timestamp) {
     return (new Date(timestamp)).format("yyyy.mm.dd hh:mmtt");
});

Template.profiles.helpers({
	Profile: function(){
		if(Session.get('searchnow')){
			return Profile.find({
				fullname: {$regex: Session.get('searchnow')}
			}, {sort: {createdAt: -1}}) 
		}else{
		return Profile.find({}, {sort: {createdAt: -1}}) 
		}
	}
});


Template.profiles.events({
	
	"keyup .search": function (event) {
		var s = $(".search").val();
		Session.set('searchnow', s);
	},
	"click .btnDelete": function (event) {
		Profile.remove(this._id);
		return false;
	},
	"click .btn-update": function (event) {
		
		Profile.update(this._id,{$set: {
			fullname: $(".uptxtName-"+this._id).val(),
			age: $(".uptxtAge-"+this._id).val(),
			address: $(".uptxtAddress-"+this._id).val(),
			updatedAt: new Date()
		}});

		$("#"+ this._id).data('dialog').close();
		return false;
	}
	
});

Template.addprofiles.events({

	"click .btn-submit": function (event){
		
			
				Profile.insert({
				fullname: $(".txtName").val(),
				age: $(".txtAge").val(),
				address: $(".txtAddress").val(),
				updatedAt: new Date(),
				createdAt: new Date()
			})

			$(".txtName").val('');
			$(".txtAge").val('');
			$(".txtAddress").val('');

			$("#dialog9").data('dialog').close();

		

		return false;
	}


});




