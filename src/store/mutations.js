export default{
    appendPet: (state, { species, pet }) => {
        state[species].push(pet)
    },
    removePet: (state, { species, name }) => {
        let index = -1
        for(var i = 0; i < state[species].length; i++){
            if(state[species][i].name === name){
                index = i
                break
            }
        }

        if(index !== -1){
            state[species].splice(i, 1)
        } else {
            console.log("animal não encontrado em " + species)
        }
    }
}
