import { TezosToolkit } from '@taquito/taquito';
import { AppDispatch } from "../store";
import { hashSlice } from './HashSlice';

// По хорошему выносим все креды и константы в .env но для теста упускаю этот момент.
const TEZOS_URL = 'https://mainnet-node.madfish.solutions'
const Tezos = new TezosToolkit(TEZOS_URL);

export const fetchBalance = (hash: string) => async (dispatch: AppDispatch) => {
    Tezos.tz
    .getBalance(hash)
    .then((balance) => {
        const hashObject = {
            id: hash,
            title: hash,
            balance: `${balance.toNumber() / 1000000}`
        }
        dispatch(hashSlice.actions.addBalance(hashObject))
    })
    .catch((error) => console.log(JSON.stringify(error)));
    
}