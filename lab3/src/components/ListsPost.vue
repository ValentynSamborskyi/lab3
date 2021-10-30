<template>
    <div>
        
        <div  v-for="lists in listTO" :key="lists._id">
            <hr>
            <div v-if="lists._id != id">
                <button class="btn" v-on:click="ShowInstr(lists._id)">+</button>
                <button class="btn2" v-on:click="Delete(lists._id)">delete</button>
                <h1 >TO #{{lists._id}}</h1>
            </div>
            <div v-else>
                <button class="btn" v-on:click="CloseInstr">-</button>
                <h3 >TO #{{lists._id}}</h3>
                <div class="profileblock" >
                    
                    <div><img :src='lists.photo'/></div>
                    <div>
                        <h3>Назва машини {{lists.name}}</h3>
                        <h3>Марка {{lists.mark}}</h3>
                        <h3>рік випуску {{lists.year}}</h3>
                        <h3>пробіг {{lists.run}}</h3>
                        <h3>Максимальна швидкість {{lists.maxQ}}</h3>
                    </div>
                </div>
                <div>
                <div >
                    <h3>Опис ТО</h3>
                    <h3>{{lists.describe}}</h3>
                    <div>
                        <p>Зроблено: {{lists.done}}</p>
                        <p>Замінено: {{lists.replaced}}</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:['listTO'],
    data(){
        return {
            showInstructions:false,
            counter:0,
            id:''
        }
    },
    components:{
    },
    methods:{
        Delete(_id){
            fetch("http://localhost:4001/deleteTO/"+_id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
            this.$emit('remove-listTO',_id)
        },
        ShowInstr(id){
            this.showInstructions=true
            this.id=id
        },
        CloseInstr(){
            this.showInstructions=false
            this.id=''
        }
    }
}
</script>
<style>
.profileblock{
    display:flex;
}
h1,h3{
    text-align:center;
}
.btn2{
    background:red;
    border-radius:50%;
    font-size:23px;
}
.btn{
    float:right;
    border-radius:100%;
    font-size:23px;
}
</style>