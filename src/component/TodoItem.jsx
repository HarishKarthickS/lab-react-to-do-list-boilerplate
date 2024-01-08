import React from "react";

class TodoItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        // eslint-disable-next-line react/prop-types
        let {e, index, updateItem, deleteItem} = this.props;
        return (
            <>
                <div>
                    <input type="text" 
                    onChange={(e)=>{
                        // eslint-disable-next-line react/prop-types
                        updateItem(e.target.value, index)
                    }} 
                    value={e}/>
                    <button 
                    onClick={()=>{
                        deleteItem(index)
                    }}>Delete Item</button>
                </div>
            </>
        )
    }
}

export default TodoItem;