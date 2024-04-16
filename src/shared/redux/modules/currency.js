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

export const swapTab = (currency_name) => {
    return {
        type: SWAP,
        selected_currency: currency_name,
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "currency/SWAP": {
            return {

            };
        }
        default: {
            return state;
        }
    }
}