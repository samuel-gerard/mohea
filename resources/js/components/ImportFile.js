import React from "react";

export const ImportFile = (props) => {

    const handleFile = (e) => {
        e.preventDefault();
        props.func();
    }
    return (
        <div>
            <h3 className="card-title">Import a CSV or a JSON</h3>
            <form onSubmit={handleFile}>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type-imported" id="type-json" value="JSON" />
                        <label className="form-check-label" htmlFor="type-json">JSON</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type-imported" id="type-csv" value="CSV" />
                        <label className="form-check-label" htmlFor="type-csv">CSV</label>
                    </div>
                </div>
                <input type="file" id="import-file" accept=".csv, .json" />
                <button type="submit" className="button secondary form-control-with-big-margin d-block">Import</button>
            </form>
        </div>
    )
}