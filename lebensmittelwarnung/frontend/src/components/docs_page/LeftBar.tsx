import * as React from 'react';
import Box from '@mui/material/Box';
import ApiPill from './ApiPill';

function LeftBar({ setApiSection, apiDocList } : { setApiSection : any, apiDocList : any[] }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            { apiDocList.map((item, i) => {
                return <ApiPill key={i} apiId={i} setApiSection={setApiSection} apiDoc={item}/>
            })}
        </Box>
    )
}

export default LeftBar;