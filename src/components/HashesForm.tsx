import React, { FC } from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

interface FormProps {
    publicKeyHashValue: string
    setInputValue: (text: string) => void
    addBalance: () => void
}

const HashesForm: FC<FormProps> = ({addBalance, publicKeyHashValue, setInputValue}) => {
    return(
        <View style={styles.container}>
            <TextInput
                    style={styles.input}
                    onChangeText={setInputValue}
                    value={publicKeyHashValue}
                />
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={addBalance}><View style={styles.addButton}><Text>Add</Text></View></TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: Dimensions.get('window').width - 100,
    },
    addButton: {
       borderWidth: 1,
       padding: 10,
       width: 50,
       height: 40
    }
  });

export default HashesForm;