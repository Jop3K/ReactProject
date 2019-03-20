import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  contentDiv = () => {
    return {
      background: '#f4f4f4',
      //padding: '10px',
      borderBottom: '1px #ccc solid',
      //textDecoration: this.props.todo.title === 'Title 2' ? 'line-through' : 'none'
    }
  }
  smallPic = () => {
    return {
      marginLeft: '0px'
    }
  }

  titleStyle = () => {
    return {
      display: 'inline-block',
      position: 'fixed',
      marginLeft: '10px'
    }
  }
  descStyle = () => {
    return {
      display: 'inline-block',
      position: 'fixed',
      marginLeft: '10px',
      marginTop: '40px',
      fontSize: '13px',
      maxWidth: '300px'
    }
  }
  viewLink = () => {
    return {
      float: 'right',
      marginTop: '80px',
      marginRight: '10px'
    }
  }





  render () {
    return (
      <div style={this.contentDiv()}>


        <img style={this.smallPic()} src={this.props.todo.thumbnails.w160} alt={'thumbnail'}  />

        <b style={this.titleStyle()}>{this.props.todo.title}</b>

        <p style={this.descStyle()}>{this.props.todo.description}</p>

        <a style={this.viewLink()} href={this.props.todo.filename}>View</a>


      </div>

    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem
