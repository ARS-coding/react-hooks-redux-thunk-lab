export function fetchCats() {}

const initialState = {
    entities: [],
    status: "idle"
};

export default function catsReducer(state, action) {
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
    };
};
