import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

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
    const tabArr = useSelector((state) => state.currency.tab_arr);

    const [currentTab, setCurrentTab] = React.useState(0);
  
    const menuArr = [
        { name: tabArr[0], content: tabArr[0] },
        { name: tabArr[1], content: tabArr[1] },
        { name: tabArr[2], content: tabArr[2] },
        { name: tabArr[3], content: tabArr[3] },
        { name: tabArr[4], content: tabArr[4] },
    ];
  
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
  
    return (
        <div>
            <TabMenuBar>
                {
                    menuArr.map((ele, idx) => (
                    <li key={idx} className={idx === currentTab ? "submenu focused" : "submenu" }
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