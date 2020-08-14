export default{
    addPet: ({ commit }, payload) => {
        commit('appendPet', payload)
    },
    removePet: ({ commit }, payload) => {
        commit('removePet', payload)
    }
}
