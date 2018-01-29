import React from 'react';

const ItemList = props => {
  const onDelete = event => {
    console.log(event.target.parentNode.id);
    const id = event.target.parentNode.id;
    props.deleteTodo(id);
  };

  return (
    <div>
      {props.items.map(item => {
        return (
          <li key={item.addtime} id={item.addtime} className="collection-item">
            {item.text}
            <button onClick={onDelete} className="btn red right waves-effect waves-light">
              <i className="material-icons">delete</i>
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default ItemList;
