// PROMISE создаем объект в котором обещание
let a = 0;


let gover = new Promise(
    function(resolve,reject){
        //асинхронныый код чето делает асинхронно
setTimeout(function(){
    let i=1;
        console.log(" sobrat Nalogi")
if(i==1){
        resolve(1000)} // выполнение then, если все хорошо
        else{ // команда объекта промис,которая позволяет отслеживать  , что обещание выполнено
        reject("Ne sobrani Nalogi")}// Выброс ошибки внутри промиса(если все плохо)
    },2000)
    });
// Нужно с бд выгрузить данные,а потом отрисовать страницу
gover.then(function(result){
 //выполнится, если  правительство сделает свое дело
 console.log("Money in karman");
 a+=result;
 return a;

}).then(function(result){
    a-=a*0.5;
    console.log(`Уехало в маями ${a}`)
});
console.log(a)



let govs = [
    new Promise(resolve => setTimeout(()=>resolve(1),1000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(3),3000)),
]

Promise.all(govs).then(function(result){
    console.log(result);
})