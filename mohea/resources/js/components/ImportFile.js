import React from "react";

export const ImportFile = (props) => {

    const handleFile = (e) => {
        e.preventDefault();
        props.func();
    }
    return (
        <div>
            <h4 className="card-title">Import a CSV or a JSON</h4>
            <form onSubmit={handleFile}>
                <div className="form-group">
                <div className="group-check">
                    <input type="radio" name="type-imported" id="type-json" value="JSON" />
                    <label htmlFor="type-json">JSON</label>
                </div>
                <div className="group-check">
                    <input type="radio" name="type-imported" id="type-csv" value="CSV" />
                    <label htmlFor="type-csv">CSV</label>
                </div>
                </div>
                <input type="file" id="import-file" accept=".csv, .json" />
                <input type="submit" value="Import" />
            </form>
        </div>
    )
}