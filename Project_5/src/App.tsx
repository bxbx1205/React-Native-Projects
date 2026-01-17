import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import DiceOne from '../assests/One.png'
import DiceTwo from '../assests/Two.png'
import DiceThree from '../assests/Three.png'
import DiceFour from '../assests/Four.png'
import DiceFive from '../assests/Five.png'
import DiceSix from '../assests/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): React.ReactElement => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
}

export default function App(): React.ReactElement {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceFive)

  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
    }
    // Trigger haptic feedback on dice roll
    ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Dice</Text>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap} style={({ pressed }) => [
        styles.rollDiceBtn,
        pressed && styles.rollDiceBtnPressed
      ]}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3a3a3a',
    marginBottom: 24,
    letterSpacing: 1,
  },
  diceContainer: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    padding: 16,
  },
  diceImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  rollDiceBtn: {
    marginTop: 24,
    backgroundColor: '#6c63ff',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#6c63ff',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  rollDiceBtnPressed: {
    backgroundColor: '#5548c8',
  },
  rollDiceBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
