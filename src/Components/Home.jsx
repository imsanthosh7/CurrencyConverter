import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'

function Home() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);


    // Data fetch 
    useEffect(() => {
        async function getExchangeRate() {
            try {
                let URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                let response = await fetch(URL);
                let result = await response.json();
                setExchangeRate(result.rates[toCurrency]);

            } catch (error) {
                console.error("Error fetching exchange rate:", error);
            }

        }
        getExchangeRate();
    }, [toCurrency, fromCurrency]);


    useEffect(() => {
        if (exchangeRate !== null) {
            setConvertedAmount((amount * exchangeRate).toFixed(2));
        }
    }, [amount, exchangeRate]);


    const handleAmountChange = (e) => {
        let value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    }


    const handelFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value)
    }

    const handelToCurrencyChange = (e) => {
        setToCurrency(e.target.value)
    }

    return (
        <>
            <div className='w-auto h-auto bg-slate-100  flex flex-col items-center rounded-lg p-4'>
                <div className='my-2'>
                    <img className='w-[150px]' src={logo} alt="" />
                </div>
                <div className=' w-full border-dashed text-center border-2 border-l-0 border-r-0 border-gray-400'>
                    <h1 className='py-3 text-lg font-semibold text-blue-500'>CURRENCY CONVERTER</h1>
                </div>
                <div>
                    <div className='my-3'>
                        <label htmlFor="amountInput" className='block text-gray-500 font-semibold' >
                            Amount:
                        </label>
                        <input
                            type="number"
                            id='amountInput'
                            value={amount}
                            onChange={handleAmountChange}
                            className='w-full py-2 px-1 outline-none border-2 border-gray-300 rounded' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="fromCurrency" className='block text-gray-500 font-semibold'>
                            From Currency:
                        </label>
                        <select
                            id="fromCurrency"
                            value={fromCurrency}
                            onChange={handelFromCurrencyChange}
                            className='w-full py-2 outline-none border-2 border-gray-300 rounded  text-gray-900' >
                            <option value="USD">USD - United States Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound Sterling</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="CAD">CAD - Canadian Dollar</option>
                            <option value="CHF">CHF - Swiss Franc</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="RUB">RUB - Russian Ruble</option>
                            <option value="BRL">BRL - Brazilian Real</option>
                            <option value="ZAR">ZAR - South African Rand</option>
                            <option value="MXN">MXN - Mexican Peso</option>
                            <option value="NZD">NZD - New Zealand Dollar</option>
                            <option value="SGD">SGD - Singapore Dollar</option>
                            <option value="HKD">HKD - Hong Kong Dollar</option>
                            <option value="SEK">SEK - Swedish Krona</option>
                            <option value="NOK">NOK - Norwegian Krone</option>
                            <option value="KRW">KRW - South Korean Won</option>
                            <option value="TRY">TRY - Turkish Lira</option>
                            <option value="PLN">PLN - Polish Zloty</option>
                            <option value="DKK">DKK - Danish Krone</option>
                            <option value="HUF">HUF - Hungarian Forint</option>
                            <option value="CZK">CZK - Czech Koruna</option>
                            <option value="ILS">ILS - Israeli New Shekel</option>
                            <option value="PHP">PHP - Philippine Peso</option>
                            <option value="IDR">IDR - Indonesian Rupiah</option>
                            <option value="THB">THB - Thai Baht</option>
                            <option value="MYR">MYR - Malaysian Ringgit</option>
                            <option value="VND">VND - Vietnamese Dong</option>
                            <option value="PKR">PKR - Pakistani Rupee</option>
                            <option value="SAR">SAR - Saudi Riyal</option>
                            <option value="AED">AED - United Arab Emirates Dirham</option>
                            <option value="EGP">EGP - Egyptian Pound</option>
                            <option value="NGN">NGN - Nigerian Naira</option>
                            <option value="BDT">BDT - Bangladeshi Taka</option>
                            <option value="UAH">UAH - Ukrainian Hryvnia</option>
                            <option value="ARS">ARS - Argentine Peso</option>
                            <option value="CLP">CLP - Chilean Peso</option>
                            <option value="COP">COP - Colombian Peso</option>
                            <option value="PEN">PEN - Peruvian Sol</option>
                            <option value="IRR">IRR - Iranian Rial</option>
                            <option value="IQD">IQD - Iraqi Dinar</option>
                            <option value="LBP">LBP - Lebanese Pound</option>
                            <option value="MAD">MAD - Moroccan Dirham</option>
                            <option value="DZD">DZD - Algerian Dinar</option>
                            <option value="GHS">GHS - Ghanaian Cedi</option>
                            <option value="KES">KES - Kenyan Shilling</option>
                            <option value="TZS">TZS - Tanzanian Shilling</option>
                            <option value="UGX">UGX - Ugandan Shilling</option>
                            <option value="XOF">XOF - West African CFA Franc</option>
                            <option value="XAF">XAF - Central African CFA Franc</option>
                            <option value="MUR">MUR - Mauritian Rupee</option>
                            <option value="SCR">SCR - Seychellois Rupee</option>
                            <option value="LKR">LKR - Sri Lankan Rupee</option>
                            <option value="MMK">MMK - Myanmar Kyat</option>
                            <option value="NPR">NPR - Nepalese Rupee</option>
                            <option value="BHD">BHD - Bahraini Dinar</option>
                            <option value="OMR">OMR - Omani Rial</option>
                            <option value="QAR">QAR - Qatari Riyal</option>
                            <option value="KWD">KWD - Kuwaiti Dinar</option>
                        </select>
                    </div>
                    <div className='my-3'>
                        <label htmlFor="toCurrency" className='block text-gray-500 font-semibold'  >
                            To Currency:
                        </label>
                        <select
                            id="toCurrency"
                            value={toCurrency}
                            onChange={handelToCurrencyChange}
                            className='w-full py-2 outline-none border-2 border-gray-300 rounded text-gray-900'>
                            <option value="USD">USD - United States Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound Sterling</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="AUD">AUD - Australian Dollar</option>
                            <option value="CAD">CAD - Canadian Dollar</option>
                            <option value="CHF">CHF - Swiss Franc</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="RUB">RUB - Russian Ruble</option>
                            <option value="BRL">BRL - Brazilian Real</option>
                            <option value="ZAR">ZAR - South African Rand</option>
                            <option value="MXN">MXN - Mexican Peso</option>
                            <option value="NZD">NZD - New Zealand Dollar</option>
                            <option value="SGD">SGD - Singapore Dollar</option>
                            <option value="HKD">HKD - Hong Kong Dollar</option>
                            <option value="SEK">SEK - Swedish Krona</option>
                            <option value="NOK">NOK - Norwegian Krone</option>
                            <option value="KRW">KRW - South Korean Won</option>
                            <option value="TRY">TRY - Turkish Lira</option>
                            <option value="PLN">PLN - Polish Zloty</option>
                            <option value="DKK">DKK - Danish Krone</option>
                            <option value="HUF">HUF - Hungarian Forint</option>
                            <option value="CZK">CZK - Czech Koruna</option>
                            <option value="ILS">ILS - Israeli New Shekel</option>
                            <option value="PHP">PHP - Philippine Peso</option>
                            <option value="IDR">IDR - Indonesian Rupiah</option>
                            <option value="THB">THB - Thai Baht</option>
                            <option value="MYR">MYR - Malaysian Ringgit</option>
                            <option value="VND">VND - Vietnamese Dong</option>
                            <option value="PKR">PKR - Pakistani Rupee</option>
                            <option value="SAR">SAR - Saudi Riyal</option>
                            <option value="AED">AED - United Arab Emirates Dirham</option>
                            <option value="EGP">EGP - Egyptian Pound</option>
                            <option value="NGN">NGN - Nigerian Naira</option>
                            <option value="BDT">BDT - Bangladeshi Taka</option>
                            <option value="UAH">UAH - Ukrainian Hryvnia</option>
                            <option value="ARS">ARS - Argentine Peso</option>
                            <option value="CLP">CLP - Chilean Peso</option>
                            <option value="COP">COP - Colombian Peso</option>
                            <option value="PEN">PEN - Peruvian Sol</option>
                            <option value="IRR">IRR - Iranian Rial</option>
                            <option value="IQD">IQD - Iraqi Dinar</option>
                            <option value="LBP">LBP - Lebanese Pound</option>
                            <option value="MAD">MAD - Moroccan Dirham</option>
                            <option value="DZD">DZD - Algerian Dinar</option>
                            <option value="GHS">GHS - Ghanaian Cedi</option>
                            <option value="KES">KES - Kenyan Shilling</option>
                            <option value="TZS">TZS - Tanzanian Shilling</option>
                            <option value="UGX">UGX - Ugandan Shilling</option>
                            <option value="XOF">XOF - West African CFA Franc</option>
                            <option value="XAF">XAF - Central African CFA Franc</option>
                            <option value="MUR">MUR - Mauritian Rupee</option>
                            <option value="SCR">SCR - Seychellois Rupee</option>
                            <option value="LKR">LKR - Sri Lankan Rupee</option>
                            <option value="MMK">MMK - Myanmar Kyat</option>
                            <option value="NPR">NPR - Nepalese Rupee</option>
                            <option value="BHD">BHD - Bahraini Dinar</option>
                            <option value="OMR">OMR - Omani Rial</option>
                            <option value="QAR">QAR - Qatari Riyal</option>
                            <option value="KWD">KWD - Kuwaiti Dinar</option>
                        </select>
                    </div>
                    <div className='text-center p-3 border-dotted border-blue-500 border-2 my-3 rounded'>
                        <p className='font-semibold text-md text-blue-500'> {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home