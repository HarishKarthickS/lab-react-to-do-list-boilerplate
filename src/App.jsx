import React from 'react'
import TodoItem from './component/TodoItem';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input : "",
      todoList : []
    }
  }

  inputChange = (e)=>{
    this.setState({
      input : e.target.value
    })
  }

  formSubmit = (e) =>{
    e.preventDefault();
    if(this.state.input.length > 0  ){
      this.setState({
        todoList : [...this.state.todoList, this.state.input]
      })
      this.setState({
        input : ""
      })
    }
  }

  updateItem = (newItem,index) =>{
    let data = this.state.todoList;
    data.splice(index,1,newItem)
    this.setState({
      todoList : data
    })
  }

  deleteItem =(index)=>{
    let data = this.state.todoList;
    data.splice(index,1)
    this.setState({
      todoList : data
    })
  }

  render(){
    return(
      <>
        <div className="todo">
          <form onSubmit={this.formSubmit}>
            <input type="text" placeholder='Enter your Task'
            value={this.state.input}
            onChange={this.inputChange} />
            <button>Add Item</button>
          </form>
          <h3>My Task : {this.state.input}</h3>
          <div>
            <h2>My To-Do List</h2>
            {
              this.state.todoList.length==0?(
                <>
                  <h3>There is no task to be done</h3>
                </>
              ):(
                this.state.todoList.map((item,index)=>{
                  return(
                    <>
                      <div>
                        <TodoItem
                        e={item}
                        index={index}
                        updateItem={this.updateItem}
                        deleteItem={this.deleteItem}
                        />
                      </div>
                    </>
                  )
                })
              )
            }
          </div>
        </div>
      </>
    )
  }
}
export default App;