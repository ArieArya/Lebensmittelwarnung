import * as React from 'react';
import Box from '@mui/material/Box';
import ApiSection from './ApiSection';
import { ApiDocumentation } from '../../model';
import Typography from '@mui/material/Typography';

interface MainContentProps {
    apiDocList: ApiDocumentation[];
}

function MainContent( { apiDocList } : MainContentProps ) {
    return (
        <Box sx={{ paddingTop: "80px" }}>
            { apiDocList.map((item, i) => {
                return <ApiSection key={i} apiId={i} apiDoc={item}/>
            })}
        </Box>
    )
}

export default MainContent;