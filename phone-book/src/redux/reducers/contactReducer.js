const InitialState = [
    {
        id:0,
        name:"carrolll",
        number: 123456789,
        email: "carol@gmail.com"
    },
    {
        id:1,
        name:"wokayy",
        number: 987654321,
        email: "wokayy@gmail.com"
    },
]

const contactReducer = (state=InitialState, {type, payload}) => {
    switch(type){
        case "ADD_CONTACT":
            return [...state, payload]
        case "UPDATE_CONTACT":
            const updatedState = state.map(contacts => contacts.id === payload.id ? payload : contacts);
            return updatedState;
        default:
            return state;
    }
}

export default contactReducer;