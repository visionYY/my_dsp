let mutations = {
    saveToken(state,payload){
        state.token = payload
    },
    saveUser(state,payload){
        state.user = payload
    },
    xttList(state,payload){
        state.list = payload
    }
}

export default mutations