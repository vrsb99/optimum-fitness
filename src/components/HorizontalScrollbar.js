import React from 'react'
import { Box, Typography } from '@mui/material';
import {ScrollMenu, VisibilityContent} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart.js';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
return(
    <ScrollMenu>
        {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
        ))}
    </ScrollMenu>
);
}

export default HorizontalScrollbar