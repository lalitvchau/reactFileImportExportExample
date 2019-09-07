import React, { Component } from 'react'
import Import from './import.jsx';
import Export from './export.jsx';
import Import2 from './import2.jsx';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         exportData: "AUD012ADV                           Advisors                              NYNNNY     ADWEB31     AIAPPEOKAD\n" +
            "AUD012ADVX                          Advisors without exceptions           NYNNNY     ADWEB31     AIAPPEOKA\n" +
            "AUD012AID                           Financial Aid Office                  NYNNNY     ADWEB50RPT28AIAPPEOKAD\n",
         tableName: 'StudentTable',
         importData: '',
      }
      this.addImportData = this.addImportData.bind(this);
   }

   addImportData(val) {
      this.setState({ importData: val })
   }

   render() {

      return (
         <div>

            <Import2 importDataFun={this.addImportData}></Import2>
            <hr />
            <Export data={this.state.exportData} tableName={this.state.tableName}></Export>
            <hr />
            <Import importDataFun={this.addImportData}></Import>
            <hr />
            <pre>{this.state.importData}</pre>
         </div>
      )
   }
}

export default App;