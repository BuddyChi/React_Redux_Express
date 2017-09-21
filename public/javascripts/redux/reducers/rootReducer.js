let initialState = {
    count: 0
}

export default function counter(state = initialState, action) {
    const count = state.count;
    switch (action.type) {
        case 'INCREASE':
            return { count: count + 1,data : action.data }
        case 'DECREASE':
            return { count: count -1 }
        default:
            return state
    }
}