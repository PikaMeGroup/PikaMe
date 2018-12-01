var userList = []

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
    //Function for 'getusers' button.
    console.log('matchbtn has been clicked');
    $.when(
        $.ajax({
            type: "GET",
            url: "/currentUser",
            success: function(res) {
                console.log("res 1", res);
                result1 = res;
            }
        }),

        $.ajax({
            type: "GET",
            url: "/userList",
            success: function(res) {
                console.log("res 2 is", res);
                result2 = res;
            }
        })
    ).then(function() {
        console.log("A", result1);
        console.log("B", result2);
    })
})

// function printUsers(userlist) {
// //Print all the users that are compatible with the current user
//     Object.keys(userlist).forEach(function(key) {
//         console.log(key, userlist[key]);
//         createPic(userlist[key])
//         createName(key)
//     });
// }

// function createPic(pokemon) {
// //Prints picture of pokemon corresponding to a user

// }