import React, {FC} from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import BalanceView from './BalanceView';
import { store, persistor } from './store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <BalanceView />
      </PersistGate>
    </Provider>
  )
}

export default App;