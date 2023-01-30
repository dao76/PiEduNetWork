import { TouchableOpacity, Image, Text } from 'react-native'
import Box from '@commom/Box'
import { fomatDate, formatDate } from '@method/date'
import routes from '@util/routes'
import { navigate } from '@navigation/navigationRef'

const NewsImgaeItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigate(routes.public.NEWS_DETAIL, { news: item })}>
            <Box
                width={110}
                margin={10}
                backgroundColor={'white'}
                radius={10}
                paddingHorizontal={5}
                style={{
                    elevation: 6
                }}
            >
                <Image
                    style={{
                        width: '95%',
                        height: 50,
                        alignSelf: 'center',
                        marginVertical: 10,
                        borderRadius: 5
                    }}
                    source={{ uri: item.img }}
                />
                <Box row alignCenter>
                    <Image
                        source={require('@images/oclock.png')}
                    />
                    <Text
                        style={{
                            color: '#808994',
                            fontSize: 10,
                            marginLeft: 5
                        }}
                    >
                        {formatDate(item.createdAt)}
                    </Text>
                </Box>
                <Text
                    numberOfLines={2}
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                        marginVertical: 5
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    numberOfLines={2}
                    style={{
                        color: '#808994',
                        fontSize: 12,
                        marginVertical: 5
                    }}
                >
                    {item.content}
                </Text>
            </Box>
        </TouchableOpacity>

    )
}

export default NewsImgaeItem