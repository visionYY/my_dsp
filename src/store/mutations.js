let mutations = {
    saveToken(state,payload){
        state.token = payload
    },
    saveUser(state,payload){
        state.user = payload
    }
}

export default mutations