import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Files from 'react-files'

let fileReader
let contentData = ''

/**
 * npm install react-files --save
 */
class Import extends Component {
    constructor(props) {
        super(props);
        this.state = {
            importTable: [null],
            file: null,
            msg: 'Click or Drop the file here for select the file.'
        }
        this.onFilesChange = this.onFilesChange.bind(this);
        this.importData = this.importData.bind(this);
    }

    importData() {
        this.props.importDataFun(contentData)
    }

    handleFileRead(e) {
        const content = fileReader.result;
        contentData = content
        if (contentData.length > 0) {
            let btnImport = document.getElementById('btnImport')
            btnImport.style.visibility = 'visible'
        }
    };

    onFilesChange(files) {
        fileReader = new FileReader();
        fileReader.onloadend = this.handleFileRead;
        fileReader.readAsText(files[0]);
        this.setState({ msg: 'File selected Successfuly ! Click on Import Button !' })
    }

    onFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    render() {
        return (
            <div className="files">
                <Files
                    className='button2'
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['.txt', '.txt']}
                    multiple={false}
                    minFileSize={0}
                    clickable
                >
                    {this.state.msg}

                </Files>
                <div id='btnImport' className='buttonImp' onClick={this.importData}> Import</div>
            </div>
        )
    }
}

export default Import;