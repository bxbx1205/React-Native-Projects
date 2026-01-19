import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native'
import { useState } from 'react'
import { currencyByRupee } from './constants'
import { CurrencyButton } from './components/CurrencyButton'
import SnackBar from 'react-native-snackbar'

export default function App() {
  const [inputValue, setinputValue] = useState('')
  const [resultvalue, setresultvalue] = useState('')
  const [targetCurrency, settargetCurrency] = useState('')

  const buttonPressed = (targetValue) => {
    if (!inputValue) {
      return SnackBar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000',
      })
    }

    const inputAmount = parseFloat(inputValue)

    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setresultvalue(result)
      settargetCurrency(targetValue.name)
    } else {
      return SnackBar.show({
        text: 'Enter a valid number',
        backgroundColor: '#EA7773',
        textColor: '#000',
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput
            style={styles.inputAmountField}
            maxLength={14}
            value={inputValue}
            clearButtonMode="always"
            onChangeText={setinputValue}
            keyboardType="number-pad"
            placeholder="Enter Amount in Rs"
          />
        </View>

        {resultvalue && (
          <Text style={styles.resultTxt}>{resultvalue}</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected,
              ]}
              onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})
