function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "REMOVE_ITEM":
            const index = newState.items.indexOf(action.item);
            if (index !== -1) {
                newState.items.splice(index, 1);
            }
            break;
        case "ADD_ROW":
            newState.tableau[action.typeTable].push(action.row)
            break;
        case "ADD_COL":
            // for (let [key, value] of Object.entries(action.tableau)) {
            //     value.map((row) => {
            //         row[state.nbCol] = ''
            //         return row
            //     })
            // }
            console.log(action.table)
            newState.nbCol += 1
            break;
        default:
            return state;
    }
    console.log(newState.tableau)
    return newState;
}
module.exports = reducer;