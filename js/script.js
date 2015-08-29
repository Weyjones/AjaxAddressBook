$(document).ready(function(){
	//show loader img
	$('#loaderImage').show();

	//show contacts
	showContacts();

	//add contact
	$(document).on('submit','#addContact', function(){
		//show loader img
		$('#loaderImage').show();

		//post
		$.post("add_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				$('#addModal').foundation('reveal','close');
				showContacts();
			});
			return false;
	});

	//edit contact
	$(document).on('submit','#editContact', function(){
		//show loader img
		$('#loaderImage').show();

		//post
		$.post("edit_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				$('.editModal').foundation('reveal','close');
				showContacts();
			});
			return false;
	});

	//Delete Contact
	$(document).on('submit','#deleteContact', function(){
		//Show Loader Image
		$('#loaderImage').show();
		
		//Post data from form
		$.post("delete_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);			
				showContacts();
			});
			return false;
	});
});


function showContacts(){
	console.log('Showing Contacts...');
	setTimeout("$('#pageContent').load('contacts.php',function(){$('loaderImage').hide();})",1000);
}