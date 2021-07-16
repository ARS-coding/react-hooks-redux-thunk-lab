export function fetchCats() {
    return (dispatch) => {
        dispatch({ type: "cats/catsLoading" }); // let the store know that we are data is loading
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
            .then(response => response.json())
            .then(json => dispatch({ type: "cats/catsLoaded", payload: json.images }))
    }
}

const initialState = {
    entities: [],
    status: "idle"
};

export default function catsReducer(state = initialState, action) {
    switch(action.type) {
        case "cats/catsLoading": // just pass an aciton with the corresponding type 
            return {
                ...state,
                status: "loading"
            };
        
        case "cats/catsLoaded": // just pass the array of cat objects as payload
            return {
                ...state,
                entities: action.payload,
                status: "idle"
            };
        default:
            return state;
    };
};
