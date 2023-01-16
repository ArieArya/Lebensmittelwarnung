import * as React from 'react';
import Box from '@mui/material/Box';
import ApiBox from './ApiBox';
import { ApiDocumentation } from '../../model';
import Typography from '@mui/material/Typography';

interface ApiSectionProps {
    apiId: number;
    apiDoc: ApiDocumentation;
}

function ApiSection( { apiId, apiDoc } : ApiSectionProps ) {
    return (
        <Box 
            id={`api-${apiId}`}
            sx={{ 
                width: "80%",
                maxWidth: "70vw",
                backgroundColor: "#303846", 
                borderRadius: "5px",
                margin: "auto",
                marginTop: "50px",
                p: 3,
                scrollMargin: "90px"
            }}>

            {/* API title */}
            <Typography variant="h5" sx={{ fontFamily: "monospace", color: "white", marginBottom: "20px"}}>
                <b>{ apiDoc.apiTitle }</b>
            </Typography>

            {/* API Description */}
            <Typography sx={{ color: "white", marginBottom: "20px"}}>
                { apiDoc.apiDescription }
            </Typography>
            
            {/* Endpoint */}
            <Box sx={{
                backgroundColor: "#1B2028",
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: "white",
                paddingTop: "10px",
                paddingBottom: "10px"
            }}
            >
                {
                    apiDoc.apiType === 'POST' 
                        ? <Box sx={{backgroundColor: "#186FAF", color: "white", margin: "0px 10px 0px 10px", padding: "6px 6px 6px 6px"}}>POST</Box> 
                        : <Box sx={{backgroundColor: "#2F8132", color: "white", margin: "0px 10px 0px 10px", padding: "4px 6px 4px 6px"}}>GET</Box> 
                }
                <Box>
                    {apiDoc.apiEndpoint}
                </Box>

            </Box>

            {/* Request */}
           { apiDoc.apiResponses.map((item, i) => {
                return <ApiBox 
                            key={i} 
                            title={item.title} 
                            responseCode={item.responseCode} 
                            contentType={item.contentType} 
                            body={item.body}
                        />
           })}
        </Box>
    )
}

export default ApiSection;