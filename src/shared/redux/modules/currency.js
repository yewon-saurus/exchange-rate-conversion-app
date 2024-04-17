const initialState = {
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

const SWAP = "currency/SWAP";

export const swapTab = (selected, prev_selected) => {
    return {
        type: SWAP,
        selected: selected,
        prev_selected: prev_selected,
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
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