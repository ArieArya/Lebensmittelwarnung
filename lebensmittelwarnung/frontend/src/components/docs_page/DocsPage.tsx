import * as React from 'react';
import Box from '@mui/material/Box';
import ApiPill from './LeftBar';
import ApiSection from './ApiSection';

// define API documentation here
type ApiDocumentation = {
    apiType: "GET" | "POST" // only supported ones for now
    apiEndpoint: string
    apiBody: string
    apiDescription: string
}

// 1. Search - GET
const apiDocSearchGet : ApiDocumentation = {
    apiType: "GET",
    apiEndpoint: "/api/search/{search-query}/",
    apiBody: "{}",
    apiDescription: "Gets matching search result of search-query"
}

// 2. Search - POST
const apiDocSearchPost : ApiDocumentation = {
    apiType: "POST",
    apiEndpoint: "/api/search/",
    apiBody: "{}",
    apiDescription: "Gets search result using QueryDSL standard (https://opensearch.org/docs/latest/opensearch/query-dsl/index/)"
}

// Group APIs in list
const apiDocList : ApiDocumentation[] = [apiDocSearchGet, apiDocSearchPost];

function DocsPage() {
    const [apiSection, setApiSection] = React.useState<number>(0);

    console.log(apiSection);

    return (
        <Box sx={{ height: "90vh", display: "flex"}}>
            <Box sx={{ flex: 1, backgroundColor: "#dedede" }}>
                <ApiPill apiDocList={apiDocList} setApiSection={setApiSection}/>
            </Box>
            <Box sx={{ flex: 3 }}>
                <ApiSection apiDocList={apiDocList} apiSection={apiSection}/>
            </Box>
        </Box>
    )
}

export default DocsPage;