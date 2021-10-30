<template>
    <div>
    
        <label for="lname">Вставте будь ласка посилання на фото</label>
        <input type="url"  v-model="photo" name="firstname" placeholder="фото" >

        <label for="lname">Назва машини</label>
        <input type="text"  v-model="name" name="firstname" placeholder="назва">

        <label for="lname">Марка</label>
        <input type="text"  v-model="mark" name="lastname" placeholder="марка">

        <label for="country">рік випуску</label>
        <input type="text"  v-model="year" name="lastname" placeholder="марка">
    
        <label for="country">пробіг</label>
        <input type="text"  v-model="run" name="lastname" placeholder="пробіг">

        <label for="country">Максимальна швидкість</label>
        <input type="text"  v-model="maxQ" name="lastname" placeholder="швидкість">

        <label for="country">Зроблено</label>
        <input type="text"  v-model="done" name="lastname" placeholder="зроблено">

        <label for="country">Замінено</label>
        <input type="text"  v-model="replaced" name="lastname" placeholder="замінено">
        <label for="country">Опис</label>
        <input type="text"  v-model="describe" name="lastname" placeholder="Опис">
        <div>
            <input type="submit"  v-on:click="Create" value="Create">
        </div>
    
    </div>
</template>
<script>
export default{
    props:['isButton'],
    data(){
        return{
            photo:'',
            name:'',
            mark:'',
            year:'',
            run:'',
            maxQ:'',
            done:'',
            replaced:'',
            describe:''
        }
    },
    methods:{
        Create(){
            const Post = {
                photo:this.photo,
                name:this.name,
                mark:this.mark,
                year:this.year,
                run:this.run,
                maxQ:this.maxQ,
                done:this.done,
                replaced:this.replaced,
                describe:this.describe
            }
            fetch('http://localhost:4001/postTO',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
                body:JSON.stringify(Post)
            })
            .then(response => response.json())
            .then(json=>{
                console.log(json)
                this.$emit('add-addPost',json)
                
            })
            this.photo='',
            this.name='',
            this.mark='',
            this.year='',
            this.run='',
            this.maxQ='',
            this.done='',
            this.replaced='',
            this.describe=''            
        },
        Cancel(){
            this.$router.push('/')
        }
    }
}
</script>
<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>