function deleteItem(dispatch, item) {
    dispatch({
        type: "REMOVE_ITEM",
        item: item
    });
}

function addRow(dispatch, row, type) {
    dispatch({
        type: "ADD_ROW",
        typeTable: type,
        row: row
    });
}

function addCol(dispatch, table) {
    console.log(table)
    dispatch({
        type: "ADD_COL",
        table: table,
    });
}

module.exports = {
    deleteItem: deleteItem,
    addRow: addRow,
    addCol: addCol
};