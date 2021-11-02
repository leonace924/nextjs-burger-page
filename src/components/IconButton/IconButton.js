import React from 'react';
import cx from 'classnames';

const IconButton = ({ color, icon, label }) => {
  return (
    <div>
      <div className="flex justify-center">{icon}</div>
      <p className={cx('mt-1 text-sm font-bold uppercase', `text-${color}`)}>
        {label}
      </p>
    </div>
  );
};

export default IconButton;
