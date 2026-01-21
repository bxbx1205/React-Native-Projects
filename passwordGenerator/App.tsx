import React, { useRef, useState } from 'react'
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  SafeAreaView as RNSafeAreaView,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { SafeAreaView } from 'react-native-safe-area-context'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Minimum 4 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required'),
})

type BouncyCheckboxProps = {
  label: string
  value: boolean
  onValueChange: (v: boolean) => void
  color?: string
}

const BouncyCheckbox: React.FC<BouncyCheckboxProps> = ({ label, value, onValueChange, color = '#2b6cb0' }) => {
  const scale = useRef(new Animated.Value(1)).current

  const toggle = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.8, duration: 80, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1.1, duration: 120, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 80, easing: Easing.out(Easing.quad), useNativeDriver: true }),
    ]).start()
    onValueChange(!value)
  }

  return (
    <TouchableWithoutFeedback onPress={toggle}>
      <View style={styles.toggleRow}>
        <Text style={styles.label}>{label}</Text>
        <Animated.View style={[styles.checkbox, { transform: [{ scale }] }]}>
          {value ? <View style={[styles.checkInner, { backgroundColor: color }]}><Text style={styles.checkMark}>✓</Text></View> : <View style={styles.unchecked} />}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function App() {
  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [number, setNumber] = useState(false)
  const [special, setSpecial] = useState(false)

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const generatedPasswordString = (passwordLength: number) => {
    let characterList = ''
    const UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const specialChars = '!@#$%^&*()_+'

    if (lowerCase) characterList += lowerCaseChars
    if (upperCase) characterList += UpperCaseChars
    if (number) characterList += digitChars
    if (special) characterList += specialChars

    if (!characterList) characterList = lowerCaseChars

    const newPassword = createPassword(characterList, passwordLength)
    setPassword(newPassword)
    setIsPasswordGenerated(true)
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumber(false)
    setSpecial(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.wrapper}>
          <Text style={styles.title}>Password Generator</Text>
          <View style={styles.card}>
            <Formik
              initialValues={{ passwordLength: 8 }}
              validationSchema={PasswordSchema}
              onSubmit={(values) => {
                generatedPasswordString(values.passwordLength)
              }}
            >
              {({ values, errors, touched, isValid, setFieldValue, handleSubmit, resetForm }) => (
                <View>
                  <View style={styles.row}>
                    <Text style={styles.inputLabel}>Length</Text>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      value={String(values.passwordLength)}
                      onChangeText={(text) => {
                        const num = Number(text.replace(/[^0-9]/g, '')) || 0
                        setFieldValue('passwordLength', num)
                      }}
                    />
                  </View>
                  {touched.passwordLength && errors.passwordLength ? (
                    <Text style={styles.error}>{errors.passwordLength}</Text>
                  ) : null}
                  <View style={styles.toggles}>
                    <BouncyCheckbox label="Lowercase" value={lowerCase} onValueChange={setLowerCase} />
                    <BouncyCheckbox label="Uppercase" value={upperCase} onValueChange={setUpperCase} />
                    <BouncyCheckbox label="Numbers" value={number} onValueChange={setNumber} />
                    <BouncyCheckbox label="Special" value={special} onValueChange={setSpecial} />
                  </View>
                  <TouchableOpacity
                    style={[styles.button, !isValid && styles.buttonDisabled]}
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                  >
                    <Text style={styles.buttonText}>Generate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={() => {
                      resetForm()
                      resetPasswordState()
                    }}
                  >
                    <Text style={[styles.buttonText, styles.resetText]}>Reset</Text>
                  </TouchableOpacity>

                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>Generated Password</Text>
                    <Text selectable style={styles.passwordText}>
                      {isPasswordGenerated ? password : 'No password yet'}
                    </Text>
                    <TouchableOpacity
                      style={styles.copyInline}
                      onPress={() => {
                        if (!isPasswordGenerated) {
                          Alert.alert('No password', 'Generate a password first')
                          return
                        }
                        Alert.alert('Copied', 'Password copied to clipboard')
                      }}
                    >
                      <Text style={styles.copyText}>Copy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
          <Text style={styles.footer}>Tip: toggle options to include different character sets</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#e6f0ff' },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  wrapper: { alignSelf: 'stretch' },
  title: { fontSize: 28, fontWeight: '700', color: '#153e75', marginBottom: 16, textAlign: 'center' },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 6,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  inputLabel: { flex: 1, fontSize: 16, color: '#333' },
  input: {
    width: 92,
    height: 44,
    borderColor: '#eef3fb',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
    backgroundColor: '#fafcff',
    fontSize: 16,
    color: '#111',
  },
  error: { color: '#d00', marginBottom: 8 },
  toggles: { marginVertical: 8 },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomColor: '#f1f5fb',
    borderBottomWidth: 1,
  },
  label: { fontSize: 16, color: '#333' },
  checkbox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
  },
  checkInner: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: { color: '#fff', fontWeight: '700' },
  button: {
    backgroundColor: '#2b6cb0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonDisabled: { backgroundColor: '#9bb4d6' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  resetButton: { backgroundColor: '#f5f7fb', borderWidth: 1, borderColor: '#e2e8f0' },
  resetText: { color: '#333' },
  resultBox: { marginTop: 16, padding: 14, backgroundColor: '#f7fbff', borderRadius: 10 },
  resultLabel: { fontSize: 14, color: '#4a5568', marginBottom: 6 },
  passwordText: { fontSize: 18, fontWeight: '700', color: '#0b2a4a' },
  copyInline: { marginTop: 8, alignSelf: 'flex-end' },
  copyText: { color: '#2b6cb0', fontWeight: '700' },
  footer: { marginTop: 14, textAlign: 'center', color: '#44576a' },
})
