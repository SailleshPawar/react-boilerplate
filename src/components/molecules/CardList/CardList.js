import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card/Card';


const CardList = (props) => {
  return (
    <ul className="c-card-list">
      {props.listItems.map((listItem, index) => {
        return (
          <Card
            key={`c-card-${index}`}
            theme={listItem.theme}
            title={listItem.title}
            description={listItem.description}
          />
        );
      })}
    </ul>
  );
};


export default CardList;

CardList.propTypes = {
  listItems: PropTypes.array
};
