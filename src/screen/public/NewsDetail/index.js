import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { formatDate } from '@method/date'
import Safe from '@reuse/Safe'

const NewsDetail = ({ route }) => {
  const { news } = route.params

  return (
    <Safe>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 10,
          paddingBottom: 300
        }}
      >
        <Box
          row
          alignCenter
          marginVertical={15}
        >
          {news.id_user.img ?
            <Image style={{ width: 50, height: 50 }} source={{ uri: news.id_user.img }} /> :
            <Image source={require('@images/account.png')} />
          }
          <Box marginLeft={10}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              {news.id_user.name}
            </Text>
            <Box row alignCenter marginTop={5}>
              <Image
                style={{
                  width: 18,
                  height: 18
                }}
                source={require('@images/oclock.png')}
              />
              <Text
                style={{
                  color: '#808994',
                  fontWeight: 'bold',
                }}
              >
                {formatDate(news.createdAt)}
              </Text>
            </Box>
          </Box>
        </Box>

        <Text
          style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}
        >
          {news.title}
        </Text>
        {news.img &&
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: news.img }}
          />
        }
        <Text style={{ marginTop: 20 }}>
          {news.content}
        </Text>
      </ScrollView>
    </Safe>
  )
}

export default NewsDetail

const styles = StyleSheet.create({})