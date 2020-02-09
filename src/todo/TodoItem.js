import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteItem(this.props.index);
  }

  render() {
    return (
      <Fragment>
        <div onClick={this.handleClick}>
          {this.props.content} 
        </div>     
      </Fragment>
    )
  }

  // 声明周期
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else{
        return false
    }
    // return false 不执行update
  }
}

// 类型校验
TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
