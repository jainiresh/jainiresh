import React from 'react';
const shoutOutInput=(props) => {
  return(
    <div class="shoutOutIn">
      <h1>he</h1>
      <input type="text" onChange={props.changed}/>
    </div>
  );
};
export default shoutOutInput;