import React, { FC, useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import BalanceList from './components/BalanceList';
import HashesForm from './components/HashesForm';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { IHashes } from './models/IHashes';
import { fetchBalance } from './store/reducers/ActionCreators';
import { hashSlice } from './store/reducers/HashSlice';


const BalanceView: FC = () => {
    const [publicKeyHashValue, setPublicKeyHashValue] = React.useState("");
    const { hashes } = useAppSelector(state => state.hashReducer)

    const dispatch = useAppDispatch()

    const addBalance = () => {
        dispatch(fetchBalance(publicKeyHashValue))
        
        // clear input after submit
        setPublicKeyHashValue("")
    }

    const removeBalance = (hashes: IHashes) => {
        dispatch(hashSlice.actions.removeBalance(hashes))
    }

    const setInputValueOnChange = useCallback(
        (newValue) => {
            setPublicKeyHashValue(newValue)
        }, [publicKeyHashValue]
    );

    return(
        <SafeAreaView>
            <HashesForm addBalance={addBalance} publicKeyHashValue={publicKeyHashValue} setInputValue={setPublicKeyHashValue}/>
            <BalanceList removeBalance={removeBalance} hashes={hashes}/>
      </SafeAreaView>
    )
}

export default BalanceView;