import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'

const ItemPointUser = ({ item, index }) => {

  return (
    <Box row>
      <Text
        style={[
          styles.textName,
          { backgroundColor: index % 2 ? '#F1F1F1' : 'white' }
        ]}
      >{item.student.name}</Text>

      <Text
        style={[
          styles.textScore,
          { backgroundColor: index % 2 ? '#F1F1F1' : 'white' }
        ]}
      >{item.point}</Text>
    </Box>
  )
}

export default ItemPointUser

const styles = StyleSheet.create({
  textName: {
    width: '70%',
    borderWidth: 1,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#40BFFF',
    borderColor: '#E7E7E7',
    padding: 5,
  },
  textScore: {
    width: '30%',
    borderWidth: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#40BFFF',
    color: 'black',
    borderColor: '#E7E7E7',
    padding: 5,
  },
})