import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { exchangeRageConvertApiRequest } from '../shared/network/request';

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

const TabBody = styled.div`
padding: 2em;
text-align: start;
`;

const Tab = () => {
    const tabArr = useSelector((state) => state.currency.tab_arr);
    const amount = useSelector((state) => state.currency.amount);
    const currentSelected = useSelector((state) => state.currency.selected);

    const [currentTab, setCurrentTab] = React.useState(0);
    const [currencyData, setCurrencyData] = React.useState({
      date: "",
      result: "",
    });
  
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    const getAndSetConvertResult = async () => {
      const response = await exchangeRageConvertApiRequest(
        amount,
        currentSelected,
        tabArr[currentTab],
      );

      setCurrencyData({
        date: response.data.date,
        result: response.data.result,
      });
    }

    React.useEffect(() => {
      getAndSetConvertResult();
    }, [currentTab, amount, currentSelected]);
  
    return (
        <div>
            <TabMenuBar>
                {
                    tabArr.map((ele, idx) => (
                    <li key={idx} className={idx === currentTab ? "submenu focused" : "submenu" }
                    onClick={() => selectMenuHandler(idx)}>{ele}</li>
                    ))
                }
            </TabMenuBar>
            <TabBody>
                <h1>
                  {tabArr[currentTab] + ' ' + currencyData.result}
                </h1>
                <div>
                  <p>기준일: </p>
                  <p>{currencyData.date}</p>
                </div>
            </TabBody>
        </div>
    );
  };

export default Tab;