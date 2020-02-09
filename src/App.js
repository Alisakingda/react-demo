import React, { Component, Fragment } from 'react'
import TodoItem from './todo/TodoItem.js'
import axios from 'axios'

import './styles/app.css'
export default class App extends Component {
  // 构造函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'dsds',
      list: ['a', 'b', 'c']
    }
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
    this.setState({
      inputValue: ''
    })
  }
  delete(key) {
    let list = this.state.list;
    list.splice(key, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 注释 */}
          <input type="text" ref={(input) => { this.input = input }} value={this.state.inputValue} onChange={this.inputChange.bind(this)} /><button onClick={this.addList.bind(this)}>Add</button>
          <ul>
            {this.state.list.map((item, key) => {
              return (
                // <li key={key}>
                //   {item}
                //   <button onClick={this.delete.bind(this, key)}>del</button>
                // </li>
                <TodoItem key={key} content={item} index={key} deleteItem={this.delete.bind(this)}></TodoItem>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
      .catch((error) => { console.log('axios 获取数据失败' + error) })
  }
}

