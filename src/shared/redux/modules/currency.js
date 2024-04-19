const initialState = {
    amount: 0,
    selected: "USD",
    currency_arr: [
        "USD",
        "CAD",
        "KRW",
        "HKD",
        "JPY",
        "CNY",
    ],
    tab_arr: [
        // "USD",
        "CAD",
        "KRW",
        "HKD",
        "JPY",
        "CNY",
    ],
};

const SET_AMOUNT = "currency/SET_AMOUNT";
const SET_SELECTED = "currency/SET_SELECTED";
const SWAP = "currency/SWAP";

const setAmount = (amount) => {
    return {
        type: SET_AMOUNT,
        amount: amount,
    }
}

const setSelected = (selected) => {
    return {
        type: SET_SELECTED,
        amount: selected,
    }
}

export const swapTab = (selected, prev_selected) => {
    return {
        type: SWAP,
        selected: selected,
        prev_selected: prev_selected,
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "currency/SET_AMOUNT": {
            return {
                ...state,
                amount: action.amount,
            }
        }
        case "currency/SET_SELECTED": {
            return {
                ...state,
                selected: action.selected,
            }
        }
        case "currency/SWAP": {
            const indexOfselectedCurrency = state.tab_arr.indexOf(action.selected); // dropdown에서 select된 항목에 해당하는 tab의 index
            let newTabArr = [...state.tab_arr]; // state.tab_arr를 복사해, 새로운 상태를 생성
            newTabArr[indexOfselectedCurrency] = action.prev_selected;

            return {
                ...state,
                tab_arr: newTabArr,
            };
        }
        default: {
            return state;
        }
    }
}