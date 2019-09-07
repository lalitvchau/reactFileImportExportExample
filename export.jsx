import React, { Component } from 'react';
import * as FileSaver from 'file-saver';

/**
 * npm install file-saver --save
 */
class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            importTable: [],
        }
        this.fileSave = this.fileSave.bind(this);
    }
    fileSave() {
        const data = new Blob([this.props.data],{type: "text/plain;charset=utf-8"})
        FileSaver.saveAs(data, this.props.tableName + '.txt');
    }

    render() {
        return (
            <div className='button' onClick={this.fileSave}>
                Export
            </div>
        )
    }
}

export default Export;