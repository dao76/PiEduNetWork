import { TouchableOpacity, Image, Text } from 'react-native'
import Box from '@commom/Box'
import { fomatDate, formatDate } from '@method/date'
import routes from '@util/routes'
import { navigate } from '@navigation/navigationRef'

const NewsItem = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate(routes.public.NEWS_DETAIL, { news: item })}
            style={{
                backgroundColor: 'white',
                paddingHorizontal: 5,
                marginVertical: 5,
                elevation: 1
            }}
        >
            <Box
                row
                marginVertical={5}
                alignCenter
            >
                <Image
                    source={require('@images/oclock.png')}
                />
                <Text
                    style={{
                        color: '#808994',
                        fontSize: 10,
                        marginLeft: 5,
                    }}
                >
                    {formatDate(item.createdAt)}
                </Text>
            </Box>
            <Text
                numberOfLines={2}
                style={{
                    color: 'black',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginLeft: 5,
                    marginBottom: 10
                }}
            >
                {item.title}
            </Text>
            <Text
                numberOfLines={3}
                style={{
                    color: '#808994',
                    fontSize: 12,
                    marginLeft: 5,
                    marginBottom: 10
                }}
            >
                {item.content}
            </Text>
        </TouchableOpacity>
    )
}

export default NewsItem