<template>
    <div>
        <button class="basicfile" v-on:click="Create">Create</button>
        <button class="basicfile" v-on:click="GetList">Get List</button>
        <CreateTO v-if="isButton===1" @add-addPost="addPost" v-bind:isButton="isButton"/>
        <ListsPost v-if="isButton===2" v-bind:listTO="listTO" @remove-listTO="removeTO"/>
    </div>
</template>
<script>
import CreateTO from '../CreateTO'
import ListsPost from '../ListsPost'
export default{
    data(){
        return{
            listTO:[],
            isButton:0
        }
    },
    components:{
        CreateTO,
        ListsPost
    },
    mounted(){
        fetch('http://localhost:4001/getTO')
        .then(response => response.json())
        .then(json=>{
            this.listTO=json.TO
            console.log(json)
            
        })
        
    },
    methods:{
        Create(){
            this.isButton=1
        },
        GetList(){
            this.isButton=2
        },
        addPost(post){
            this.listTO.push(post)
        },
        removeTO(_id){
            this.listTO = this.listTO.filter(t=>t._id !==_id)
        },
    }
}
</script>
<style>
.basicfile{
    margin-left:25%;
    font-size:25px;
}
</style>