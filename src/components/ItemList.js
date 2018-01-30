import React from 'react';

const ItemList = props => {
  const onDelete = event => {
    const id = event.target.parentNode.parentNode.parentNode.id;
    props.deleteTodo(id);
  };

  return (
    <div>
      {props.items.map(item => {
        const className = `collection-item hoverable card-panel blue lighten-${item.priority}`;
        return (
          <li key={item.addtime} id={item.addtime} className={className}>
            <div className="row">
              <div className="col s10 truncate ">
                <p className="truncate">{item.text}</p>
              </div>
              <div className="col s2">
                <button onClick={onDelete} className="btn red right waves-effect waves-light">
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ItemList;
