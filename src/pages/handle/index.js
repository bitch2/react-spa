import React, { Component } from 'react'
export default class Handle extends Component {
    constructor(props){
      super(props)
      this.upload=this.upload.bind(this)
    }
    upload(){
      console.log(this.refs.file)
    }
    render() {
      return (
        <div className='handle'>
          <input type='file' ref='file' onChange={this.upload}/>
        </div>
      )
    }
}
