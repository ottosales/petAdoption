<template>
    <div class="container">
        <h1 class="mb-4">Cats for adoption</h1>
        <b-table striped hover :items="cats"></b-table>
    </div>
</template>

<script>
    import cats from '@/data/cats.js'
    export default {
        data(){
            return{
                cats
            }
        }
    }
</script>