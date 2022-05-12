import React from 'react';

type Props = {
  goods: Array<string>
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
