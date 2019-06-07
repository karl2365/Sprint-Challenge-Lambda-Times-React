import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log(props);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  const isSelected = () => {
    let tabClass='';
    if (props.tab === props.selectedTab){
      tabClass='tab active-tab';
    }else{
      tabClass='tab';
    }
    return tabClass;
  }

  return (
    <div
      className={isSelected()}
      onClick={() => {props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
