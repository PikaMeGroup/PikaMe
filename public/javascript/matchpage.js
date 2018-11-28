function getData(link) {

    return ($.ajax({
        url: link,
        dataType: 'json',
        async: false,
        success: function(data) {
            return data;
        }
    })).responseJSON;
}

document.getElementById('matchbtn').addEventListener('click', function(){
	console.log('matchbtn has been clicked');
	$.ajax({
	  type: "GET",
	  url: "/userList",
	success: function(res) {
        console.log("res is", res);
        // alert(res);
    }});

})
