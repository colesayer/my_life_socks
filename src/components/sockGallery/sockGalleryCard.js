import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSock, deleteSock } from '../../actions/sockGallery.js'

class SockGalleryCard extends Component{
  state = {
    selected: false,
  }

  handleClick = () => {
    this.props.selectSock(this.props.sock)
    this.setState({
      selected: true
    })
  }

  handleDelete = (e) => {
    e.preventDefault()
    this.props.deleteSock(this.props.sock)
  }

  render(){
    let border = ""
    if(this.props.selectedSock.id === this.props.sock.id){
      border = "2px solid yellow"
    } else {
      border = ""
    }
    return(
      <div className="sock-gallery-card">
        <button onClick={this.handleDelete}>X</button>
        <img alt="" onClick={this.handleClick} src={this.props.sock.image} style={{border: `${border}`, boxSizing: 'border-box'}}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedSock: state.selectedSock
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectSock: selectSock,
    deleteSock: deleteSock
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SockGalleryCard)
