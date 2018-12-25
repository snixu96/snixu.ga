	$(document).ready(function(){
		var typeQuery = $('#typing'); 
		var typeObj = {
	showCursor: false,
	actions: [
		{type: 'erdemsweb.com'},
		{delay: 300},
		{type: ' | Bir göz at!'},
		{delay: 1000},
		{remove: {num: 'erdemsweb.com | Bir göz at!'.length}},
		{type: 'UploadPhotoMe'},
		{delay: 300},
		{type: ' | Çok Yakında'},
		{delay: 1000},
		{remove: {num: 'UploadPhotoMe | Çok Yakında'.length}},
	]
	};
	typeQuery
	.on('typewriteComplete', function() {
	typeQuery.typewrite(typeObj);
	})
	.typewrite(typeObj);
	});
