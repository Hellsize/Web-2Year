let xhr = new XMLHttpRequest();

xhr.open("GET","/",true)
xhr.onload = function(e){
    if (xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText)
        } else{
            console.error(xhr.statusText)
        }
    }
}
xhr.onerror=(e)=>console.error(xhr.statusText);
xhr.send(null);
console.log(xhr.responseText)

