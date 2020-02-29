import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>

      <AppCard>
        <Text>{todo.title}</Text>
        <Button title="Edite"></Button>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Назад' onPress={goBack} color='#757575' />
        </View>
        <View style={styles.button}>
          <Button
            title='Удалить'
            color='#e53935'
            onPress={() => console.log('To Remove')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
})