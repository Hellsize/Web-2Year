$("#click").on("click",function(){
let name = $("#name").val();
    $.ajax({
        "url":"/test",
        "method":"GET",
        "data":{
"name":name
        },
        "dataType":"text",
        "success":function(data)
        {
            alert(data);
        }
    })


})


