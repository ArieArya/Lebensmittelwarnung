import * as React from 'react';
import Box from '@mui/material/Box';
import LeftBar from './LeftBar';
import MainContent from './MainContent';
import { ApiDocumentation } from '../../model';
import { apiDocSearchGet, apiDocSearchPost } from './apiDocumentationSamples';

// Group APIs in list
const apiDocList: ApiDocumentation[] = [apiDocSearchGet, apiDocSearchPost];

function DocsPage() {
    return (
        <Box sx={{ height: "100%", display: "flex"}}>
            <Box sx={{ display: { md: 'inline', xs: 'none' }, flex: 1, backgroundColor: "#dedede" }}>
                <LeftBar apiDocList={apiDocList}/>
            </Box>
            <Box sx={{ flex: 3 }}>
                <MainContent apiDocList={apiDocList}/>
            </Box>
        </Box>
    )
}

export default DocsPage;