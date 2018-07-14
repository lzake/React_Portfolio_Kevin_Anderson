import { updateObject } from "../shared/utility";

// ! Actions
const TOGGLE_SHOW_WORKS_FILTER = "app/ducks/TOGGLE_SHOW_WORKS_FILTER";
// const LOAD   = 'my-app/widgets/LOAD';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// ! Reducer

const initialState = {
    worksFilterShown: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // do reducer stuff
        case TOGGLE_SHOW_WORKS_FILTER:
            return toggleShowWorksFilter(state);

        default:
            return state;
    }
}

// ! Action Creators
export function toggleShowWorksFilter(state) {
    return updateObject(state, {
        worksFilterShown: !state.worksFilterShown
    });
}

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//     return dispatch =>
//         get("/widget").then(widget => dispatch(updateWidget(widget)));
// }
