$("input[name='name']").change(function(){
    console.log($(this).val());
    let s =[1,2,3]
    $("#class").text("")
    for(let i=0;i<s.length;i++){
       $("#class").append($("<li>",{
           text:s[i]
       }))
    }

    $.ajax({
        "url":"/test",
        "method":"GET",
        "data":{
"name":name
        },
        "dataType":"json",
        "success":function(data)
        {
            alert(data);
        }
    })

}) // 