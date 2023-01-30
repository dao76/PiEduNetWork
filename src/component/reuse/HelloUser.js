import Box from '@commom/Box';
import Txt from '@commom/Txt';
import React from 'react';

const HelloUser = ({ name }) => {
    return (
        <Box>
            <Txt bold size={24}>
                {name}
            </Txt>
        </Box>
    );
};
export default HelloUser;
