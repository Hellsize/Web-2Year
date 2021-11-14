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


// В программе генерируется случайное число от 1 до 10 .  И в случае, если выпадает от 1 до 5
//должен быть выполнен resolve с текстом - победитель по жизни
// от 6 до 10  reject - не повезло

let random = new Promise(
    function(resolve,reject){
        
setTimeout(function(){
   a = Math.random()
   a=a*10;
   a=Math.ceil(a)
        console.log(" Победитель по жизни")
if(a<6){
    resolve("Победь по жизни")} 
    else{ 
    reject("Не повезло")}
},2000)
});
// 
random.then(function(result){
(r)=>{
console.log(r)
};
(r)=>{
console.log(r)
}
 
});




//ASYNS/AWAIT то же само , что и промис,но современее/ создает асинхронную функцию,внутри которой можно выполнять другие асинхронные дейтвия и дождидаться их выполнения через await
async function test(){
    //setTimeout( ()=>{
   //     console.log(1)
        
   // },3000)
  //  return(2)
// return result = await Promise.resolve(2)// возвращение  ожидания при  удачном срабатывании промиса
let a = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("1"),1000)
});
let result = await a;
return Promise.resolve(result);
//console.log(result)
//console.log("2")
}

test().then((resolve)=>console.log(resolve),(reject)=>console.log(reject))// then  нужен для того чтобы получить некоторые данные a=2


async function test(){
   let a = new Promise((resolve,reject)=>{
    {setTimeout(()=>{
        console.log(1)
        resolve(2)
    },10)
    // return Promise.resolve(3)
    // return Promise.reject(2)
}
let result =await a;
console.log(result)
return Promise.resolve(444)


test().then((resolve)=>console.log(resolve),(reject)=>console.log(reject))