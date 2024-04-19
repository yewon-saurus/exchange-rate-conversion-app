import axios from "axios";

export async function exchangeRageConvertApiRequest(amount, from, to) {
    let response = null;
    const url = "https://api.apilayer.com/exchangerates_data/convert";

    response = await axios.get(url, {
        params: {
            amount: amount,
            from: from,
            to: to,
        },
        headers: {
            apikey: process.env.REACT_APP_APILAYER_KEY,
        },
    });

    return response;
}