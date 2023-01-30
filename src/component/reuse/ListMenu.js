import React from 'react';
import Box from '@commom/Box';
import Txt from '@commom/Txt';
import ItemFeature from './ItemFeature';

const ListMenu = ({ classInfo, dataFeature }) => {
    return (
        <Box flex>
            <Txt
                marginTop={15}
                marginBottom={10}
                size={24}
                bold
            >
                Menu
            </Txt>
            <Box wrap row paddingBottom={50}>
                {dataFeature.map(item => {
                    return <ItemFeature
                        key={item.id}
                        item={item}
                        width={'30%'}
                        classInfo={classInfo}
                    />;
                })}
            </Box>
        </Box>
    )
}

export default ListMenu