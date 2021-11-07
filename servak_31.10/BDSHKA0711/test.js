try{ 
 // let p = document.getElementById("foo"); // ==
$("#foo").on("click",function(){
    console.log(3);
    throw(new Error);
}) // ==
} catch(error){
    console.log(error);
}

setTimeout(function(){
    console.log(1);
},2000);

console.log(2); // Пример асинхроности сначала 2 , потом 1 выведет


