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

    return (
        <AmountFormDiv>
            <input />
            <select onChange={(e) => console.log(e.target.value)}>
                {
                    currencyArr.map((ele, idx) => <option key={idx} value={ele}>{ele}</option>)
                }
            </select>
        </AmountFormDiv>
    );
}

export default AmountForm;