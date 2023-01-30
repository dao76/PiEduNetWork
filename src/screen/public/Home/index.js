import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Safe from '@reuse/Safe'
import { getAllNewsSchool } from '@service/newsService'
import Box from '@commom/Box'
import NewsImgaeItem from './NewsImgaeItem'
import NewsItem from './NewsItem'

const Home = ({ navigation }) => {
  const [news, setNews] = useState()
  useEffect(() => {
    getNewsAPI()
    const unsubscribe = navigation.addListener('focus', () => {
      getNewsAPI()
    })

    return () => unsubscribe
  }, [])

  const getNewsAPI = async () => {
    const res = await getAllNewsSchool()
    if (!res.error) {
      setNews(res.data)
    }
  }

  return (
    <Safe backgroundColor={null}>
      {news &&
        <ScrollView
          contentContainerStyle={{ paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView>
            <Image
              style={{
                width: '100%'
              }}
              source={require('@images/education.png')}
            />
            <Box paddingHorizontal={8}>
              <ScrollView horizontal>
                {news.newsHasImages.map(item => <NewsImgaeItem key={item._id} item={item} />)}
              </ScrollView>
            </Box>
            <Box paddingHorizontal={15} flex={1}>
              <ScrollView>
                {news.newsNotImages.map(item => <NewsItem key={item._id} item={item} />)}
              </ScrollView>
            </Box>
          </SafeAreaView>
        </ScrollView>
      }
      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20
        }}
      >
        <Image
          source={require('@assets/img/addnews.png')}
        />
      </TouchableOpacity> */}
    </Safe>
  )
}

export default Home

const styles = StyleSheet.create({})