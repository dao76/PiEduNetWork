import { TouchableOpacity, Image, Text } from 'react-native'
import Box from '@commom/Box'
import { fomatDate, formatDate } from '@method/date'
import routes from '@util/routes'
import { navigate } from '@navigation/navigationRef'

const Item = ({ item }) => {

    return (
        <TouchableOpacity
            onPress={() => navigate(routes.public.NOTIFICATION_DETAIL, { notification: item })}

            style={{
                backgroundColor: 'white',
                paddingHorizontal: 5,
                marginVertical: 5,
                elevation: 2,
                borderRadius: 10,
                flexDirection: 'row',
                borderColor: 'red'
                // backgroundColor: 'white',
                // marginVertical: 10,
                // borderRadius: 10,
                // elevation: 2,
                // flexDirection: 'row',
                // marginHorizontal: 5,
                // width: '100%',

            }}
        >
            <Box

                marginVertical={5}

            >
                <Text
                    style={{
                        color: '#808994',
                        fontSize: 15,
                        marginLeft: 5,
                        fontWeight: 'bold',

                    }}
                >
                    Tháng {(item.createdAt.slice(5, 7))}
                </Text>
                <Text
                    style={{
                        color: '#40BFFF',
                        fontSize: 32,
                        marginLeft: 5,
                        fontWeight: 'bold',
                        marginLeft: 13
                    }}
                >
                    {(item.createdAt.slice(1, 3))}
                </Text>
                <Text
                    style={{
                        color: '#808994',
                        fontSize: 15,
                        marginLeft: 13,
                        fontWeight: 'bold',

                    }}
                >
                    {(item.createdAt.slice(0, 4))}
                </Text>
            </Box>
            <Box>
                <Text
                    numberOfLines={2}
                    style={{
                        color: '#000000',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 13,
                        marginBottom: 1,
                        marginTop: 7
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    numberOfLines={3}
                    style={{
                        color: '#808994',
                        fontSize: 15,
                        marginLeft: 13,
                        marginBottom: 2
                    }}
                >
                    {item.content}
                </Text>
            </Box>
        </TouchableOpacity>
    )
}

export default Item

