export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS_ACTION':
            return {
                characters: action.payload
            };
        case 'GET_ACTIVE_CHARACTER_ACTION':
            return {
                character: action.payload
            }
        default:
            return state
    }
}