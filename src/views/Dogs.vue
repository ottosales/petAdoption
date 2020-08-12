<template>
    <div class="container">
        <h1 class="mb-4">Dogs for adoption</h1>
        <b-table striped hover :items="dogs"></b-table>
    </div>
</template>

<script>
    import dogs from "@/data/dogs.js"
    export default {
        data(){
            return{
                dogs
            }
        }
    }
</script>