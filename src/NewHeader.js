import React from 'react';

const NewHeader = (props) => {

  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  );
}

NewHeader.defaultProps = {
  title: "To do list"
}
export default NewHeader;