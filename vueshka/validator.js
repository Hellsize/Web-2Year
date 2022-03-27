let app = Vue.createApp({
    data(){
        return{
users:[],
username:"",
age:"",

        }
    },
    methods:{
        addUser(){
            let user = {
                name: this.username,
                age:this.age
            }
            this.username = "";
            this.age="";
            this.users.push(user);
           
        }
    }
})

app.component("user-form",{
    template:` <div class="user">
    <h2> User </h2>
    <p> Name:<i> {{name}} </i> </p>
    <p> Age: <i> {{age}} </i> </p>
    <hr>
    </div>`,
    props:{
        name:{
            type:String,
            required: true,
            default:"Negroid",
            validator:function (value) {
                return value !="admin" && value !=""
            },
        },
        age:{
            type:String,
            required: true,
            default:"0",
            validator:function (value) {
                return value > 0 && value < 100
            },
        },
    },
})

app.mount("#app");