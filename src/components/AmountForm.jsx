import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const AmountFormDiv = styled.div`
background-color: #dddddd;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1em;

input {
    width: 70%;
    padding: .5em;
}

select {
    width: 20%;
}
`;

const AmountForm = () => {
    const currencyArr = useSelector((state) => state.currency.currency_arr);
    const currencyDispatch = useDispatch();

    const [amount, setAmount] = React.useState(0);
    const [currentCurrency, setCurrentCurrency] = React.useState(currencyArr[0]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value <= 1000) setAmount(Number(value));
        else setAmount(1000);
    }

    const handleSelectChange = (e) => {
        const selected = e.target.value;
        const prevSelected = currentCurrency;

        currencyDispatch({
            type: "currency/SWAP",
            selected: selected,
            prev_selected: prevSelected,
        });
        
        setCurrentCurrency(selected);
    }

    return (
        <AmountFormDiv>
            <input value={Number(amount).toLocaleString('ko-KR')} onChange={handleInputChange} />
            <select onChange={handleSelectChange}>
                {
                    currencyArr.map((ele, idx) => <option key={idx} value={ele}>{ele}</option>)
                }
            </select>
        </AmountFormDiv>
    );
}

export default AmountForm;