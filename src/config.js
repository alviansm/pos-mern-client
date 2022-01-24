import dotenv from 'dotenv';
dotenv.config();

const api_host = process.env.REACT_APP_API_HOST;
const site_title = process.env.REACT_APP_SITE_TITLE ;
const global_ongkir = process.env.REACT_APP_GLOBAL_ONGKIR ;
const owner = process.env.REACT_APP_OWNER ;
const contact = process.env.REACT_APP_CONTACT ;
const billing = {
	account_no: process.env.REACT_APP_BILLING_NO,
	bank_name: process.env.REACT_APP_BILLING_BANK
}

export const config = {
	api_host,
	site_title,
	global_ongkir,
	owner,
	contact,
	billing
}