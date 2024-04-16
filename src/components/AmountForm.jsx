import styled from "styled-components";

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
    return (
        <AmountFormDiv>
            <input />
            <select>
                <option>hi</option>
                <option>hello</option>
            </select>
        </AmountFormDiv>
    );
}

export default AmountForm;