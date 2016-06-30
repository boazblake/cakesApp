import React from 'react'
import ReactDOM from 'react-dom'
import filepickerWrapper from './filePicker'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'
import Moment from 'moment'
import { Description, FileName } from './description'

filepickerWrapper()

console.log('filepicker loaded onto window', filepicker)

class Admin extends React.Component {
  
  _handleImgUpload(blob, domEl) {
    console.log('blob', blob)
    console.log('domEl', domEl)
    this.setState({
      uploadedImgEl: domEl,
      uploadedBlob:blob
    })
  }

  _handleAddDescription(evt) {
    let descriptionforImage = evt.target.value
    this.setState({
      descriptionforImage
    })
  }

  _handleAddFileName(evt) {
    let imageName = evt.target.value
    this.setState({
      imageName
    })
  }

  _createRecord(){
    let productData =  this.state.uploadedBlob
    productData.description = this.state.descriptionforImage
    productData.fileName = this.state.imageName
 
    this._uploadToFileStack(
      this.state.uploadedImgEl, 
      productData, 
      this._saveToMongoDB
    )
  }
 
  _uploadToFileStack(imgDataEl, productData, cb){
    console.log('apikeyFileStack',Secrets.apikeyFileStack)
    filepicker.setKey(Secrets.apikeyFileStack)

    filepicker.store(
      imgDataEl,
      function(Blob){
        console.log('sucessfully saved!!', Blob)
        cb(productData, Blob)
        
/////chnage state of _fileuplaod to display ""succesfully uplaoded


      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }

  _saveToMongoDB(productData, Blob){
    var now = Date.now();
    let productDataforDB = {};
    productDataforDB.imgLink = Blob.url;
    productDataforDB.size = Blob.size/1000;
    productDataforDB.name = Blob.filename;
    productDataforDB.uploadDate = now;
    productDataforDB.description = productData.description;
    productDataforDB.fileName = productData.fileName;
    console.log('productData for mongoDB', productDataforDB);
  }

  render(){
    return (
      <div>
        <h1>Upload Your stuff here!</h1>
        <Description addDescription={this._handleAddDescription.bind(this)}/>
        <FileName addFileName={this._handleAddFileName.bind(this)}/>
        <FileStackUpload onSubmit={this._createRecord.bind(this)} onUpload={this._handleImgUpload.bind(this)}/>
        <div id='previewImg'></div>
      </div>
    )
  }
}


export default Admin