document.getElementById('chatbox').addEventListener('click', function(){
	console.log('chatbox has been clicked');
	$.ajax({
	  type: "GET",
	  url: "/userList",
	success: function(res) {
        console.log(res);
        alert(res);
    }});

})
