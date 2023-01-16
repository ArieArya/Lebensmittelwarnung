import * as React from 'react';
import Box from '@mui/material/Box';
import { ApiResponse } from '../../model';
import Typography from '@mui/material/Typography';

function ApiBox({ title, responseCode, contentType, body } : ApiResponse) {
    return (
        <Box>
            {/* Title */}
            <Typography sx={{ fontFamily: "monospace", color: "white", marginTop: "20px", marginBottom: "10px"}}>
                { title }
            </Typography>

            {/* Response Code */}
            <Box sx={{ m: 0.5, p: 0.7, backgroundColor: "white", borderRadius: "10px", color: responseCode === "200" ? "green" : "black", width: "80px", textAlign: "center" }}>
                <b>{ responseCode }</b>
            </Box>

            <Box sx={{
                backgroundColor: "#1B2028",
                width: "100%", 
                color: "white",
                p: 3,
                marginTop: 2,
                marginBottom: 2
            }}>
                {/* Content Type */}
                <Box sx={{
                    backgroundColor: "#303846",
                    width: "100%",
                    p: 1.5
                }}
                >
                    Content type: <b>{contentType}</b>
                </Box>


                {/* Body */}
                <Box sx={{ marginTop: 2, marginBottom: 2, overflowX: "scroll"}}>
                    <pre>{ body }</pre>
                </Box>
                
            </Box>
        </Box>
    )
}

export default ApiBox;