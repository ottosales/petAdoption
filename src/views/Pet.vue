<template>
    <div>
        <h1>{{ animal.name }} (from group {{ $route.params.species }})</h1>
        <h4>Breed: {{ animal.breed }}</h4>
        <h4>Gender: {{ animal.gender }}</h4>
        <h4>Age: {{ animal.age }}</h4>
        <h4>Color: {{ animal.color }}</h4>
        <h4>Weight: {{ animal.weight }} pounds</h4>
        <h4>Location: {{ animal.location }}</h4>
        <h4>Notes: {{ animal.notes }}</h4>

    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data(){
            return{
                animal: {}
            }
        },
        computed: {
            ...mapState([
                'cats',
                'dogs'
            ])
        },
        mounted(){
                const animal = this[this.$route.params.species][this.$route.params.id]
                this.animal = animal
        }
    }
</script>
