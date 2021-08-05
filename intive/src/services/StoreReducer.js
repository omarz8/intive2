import { types } from './Actions';

const InitialStore = {
    peopleDetail: {},
    selectedPeople: false
}


const StoreReducer = (state, action) => {
    switch (action.type) {
        case types.newPeople:
            return {
                selectedPeople: true,
                peopleDetail: action.payload
            }
        default:
            return state;
    }
}

export default StoreReducer
export { InitialStore }