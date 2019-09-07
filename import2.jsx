import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

let fileReader
let contentData
let tempProps
let dataHandle = () => {
    new Import2(tempProps).handleImport()
}
/**
 * npm install react-file-reader --save
 */
class Import2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            importTable: [null],
            file: null,
        }
        this.handleFiles = this.handleFiles.bind(this)
        this.handleImport = this.handleImport.bind(this)

    }

    handleImport() {
        this.props.importDataFun(contentData)
    }

    handleFileRead(e) {
        const content = fileReader.result;
        contentData = content
        dataHandle()
    };

    handleFiles(files) {
        tempProps = this.props
        fileReader = new FileReader();
        fileReader.onloadend = this.handleFileRead;
        fileReader.readAsText(files.fileList[0]);
    }


    render() {
        return (
            <div className="files">
                <ReactFileReader fileTypes={[".txt", ".rtf"]} base64={true} multipleFiles={false} handleFiles={this.handleFiles} >
                    <button className='button'>Upload</button>
                </ReactFileReader>

            </div>
        )
    }
}

export default Import2;