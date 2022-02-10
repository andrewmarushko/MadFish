import React, { FC } from 'react';
import { FlatList, View, Text, Button, StyleSheet } from 'react-native'
import { IHashes } from '../models/IHashes';

interface BalanceProps {
    hashes: IHashes[],
    removeBalance: (heshID: IHashes) => void
}

const BalanceList: FC<BalanceProps> = ({hashes, removeBalance}) => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={hashes}
                renderItem={({item}) => 
                    <View style={styles.tableView} key={item.id}>
                        <Text style={styles.textInput} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                        <Text>{item.balance}</Text>
                        <Button onPress={() => removeBalance(item)} title="x"/>
                    </View>
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    tableView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        width: 200
    }
  });

export default BalanceList;