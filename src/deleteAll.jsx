import React from 'react';

const DeleteAll = ({ onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className="cursor-pointer px-4 py-2 rounded-md m-2 bg-red-600 text-white"
      >
 &#128465;      </button>
    </div>
  );
};

export default DeleteAll;
