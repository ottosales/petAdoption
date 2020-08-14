<template>
    <div>
        <h1>Adopt a new cute friend</h1>
        <h1>Do it now</h1>

        <button class="btn btn-primary mt-4 mb-5" @click="togglePetForm">Add New Pet</button>

        <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
            <b-nav tabs class="mb-5"></b-nav>

            <b-form-group
            id="input-group-0"
            label="Cat or Dog:"
            label-for="input-0"
            >
                <b-form-select
                id="input-0"
                v-model="formData.species"
                placeholder="Enter species"
                :options="[{ value: 'cats', text: 'Cat' }, { value: 'dogs', text: 'Dog' }]"></b-form-select>
            </b-form-group>

            <b-form-group
            id="input-group-1"
            label="Pet name:"
            label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="formData.name"
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-2"
            label="Breed:"
            label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="formData.breed"
                placeholder="Enter Breed"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-3"
            label="Gender:"
            label-for="input-3"
            >
                <b-form-select
                id="input-3"
                v-model="formData.gender"
                placeholder="Enter gender"
                :options="[{ value: 'male', text: 'Male' }, { value: 'female', text: 'Female' }]"></b-form-select>
            </b-form-group>

            <b-form-group
            id="input-group-4"
            label="Age:"
            label-for="input-4"
            >
                <b-form-input
                id="input-4"
                v-model="formData.age"
                placeholder="Enter age"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-5"
            label="Color:"
            label-for="input-5"
            >
                <b-form-input
                id="input-5"
                v-model="formData.color"
                placeholder="Enter color"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-6"
            label="Weight:"
            label-for="input-6"
            >
                <b-form-input
                id="input-6"
                v-model="formData.weight"
                placeholder="Enter weight"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-7"
            label="Location:"
            label-for="input-7"
            >
                <b-form-input
                id="input-7"
                v-model="formData.location"
                placeholder="Enter location"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-8"
            label="Notes:"
            label-for="input-8"
            >
                <b-form-input
                id="input-8"
                v-model="formData.notes"
                placeholder="Enter notes"
                ></b-form-input>
            </b-form-group>

            <b-button class="mt-3 mb-5" type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>

</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data(){
            return{
                showPetForm: false,
                formData: {
                    name: '',
                    breed: '',
                    gender: '',
                    age: 0,
                    color: '',
                    weight: 0,
                    location: '',
                    notes: '',
                    species: ''
                }
            }
        },
        methods: {
            ...mapActions([
                'addPet'
            ]),
            togglePetForm(){
                this.showPetForm = !this.showPetForm
            },
            handleSubmit(){
                const { name, breed, gender, age, color, weight, location, notes, species } = this.formData
                const payload = {
                    species,
                    pet: {
                        name,
                        breed,
                        gender,
                        age,
                        color,
                        weight,
                        location,
                        notes
                    }
                }
                this.addPet(payload)

                this.formData = {
                    name: '',
                    breed: '',
                    gender: '',
                    age: 0,
                    color: '',
                    weight: 0,
                    location: '',
                    notes: '',
                    species: ''
                }

                this.showPetForm = false
            }
        }
    }
</script>
