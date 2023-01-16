import * as React from 'react';
import Box from '@mui/material/Box';
import { ApiDocumentation } from '../../model';

interface ApiPillProps {
    apiId: number;
    apiDoc: ApiDocumentation;
}

function ApiPill({ apiId, apiDoc } : ApiPillProps) {
    const handleClickScroll = () => {
        const element = document.getElementById(`api-${apiId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ 
            height: "30px", 
            width: "320px", 
            margin: "auto",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "30px 0px 20px 0px",
            fontFamily: "monospace"
        }}>
            <Box sx={{ 
                borderRadius: "10px",
                backgroundColor: "#edebeb",
                ':hover': {
                    bgcolor: '#c2c2c2',
                    cursor: 'pointer'
                },
                width: "100%", 
                height: "40px",
                display: "flex",
                alignItems: "center"
            }}
            onClick={() => {
                handleClickScroll()
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
        </Box>
    )
}

export default ApiPill;