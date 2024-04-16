import React from 'react';
import styled from 'styled-components';

const TabMenuBar = styled.ul`
  background-color: #dddddd;
  color: #ffffff;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0px;

  .submenu {
    width: calc(100% / 5);
    heigth: 30px;
    padding: 1em;
  }

  .focused {
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }
`;

const Tab = () => {
    const [currentTab, setCurrentTab] = React.useState(0);
  
    const menuArr = [
        { name: 'Tab1', content: '1' },
        { name: 'Tab2', content: '2' },
        { name: 'Tab3', content: '3' },
        { name: 'Tab4', content: '4' },
        { name: 'Tab5', content: '5' },
    ];
  
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
  
    return (
        <div>
            <TabMenuBar>
                {
                    menuArr.map((ele, idx) => (
                    <li className={idx === currentTab ? "submenu focused" : "submenu" }
                    onClick={() => selectMenuHandler(idx)}>{ele.name}</li>
                    ))
                }
            </TabMenuBar>
            <div>
                <p>{menuArr[currentTab].content}</p>
            </div>
        </div>
    );
  };

export default Tab;