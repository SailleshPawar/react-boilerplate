import React, { useMemo, useState} from 'react';
import Card from '../../atoms/Card/Card';
import {getData} from '../../../api/Service';


const CardList = () => {
  const [listItems, setListItem] = useState([]);

  useMemo(async () => {
    const data = await getData('https://jsonplaceholder.typicode.com/users');
    setListItem(data);
  }, []);

  if (listItems && listItems.length !== 0) {
    return (
      <ul className="c-card-list">
        { listItems.map((listItem, index) => {
          return (
            <Card
              key={`c-card-${index}`}
              theme={'dark'}
              title={listItem.name}
              description={listItem.company.catchPhrase}
            />
          );
        })}
      </ul>
    );
  }
  return (
    <Card
      key={`c-card-${0}`}
      theme={'dark'}
      title={'No Data'}
      description={'No Data Found'}
    />
  );
};


export default CardList;
