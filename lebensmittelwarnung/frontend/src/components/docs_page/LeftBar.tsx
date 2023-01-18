import * as React from 'react';
import Box from '@mui/material/Box';
import ApiPill from './ApiPill';
import { ApiDocumentation } from '../../model';

interface LeftBarProps {
    apiDocList: ApiDocumentation[];
}

function LeftBar({ apiDocList } : LeftBarProps) {
    return (
        <Box sx={{ textAlign: "center", position: "fixed", paddingTop: "80px" }}>
            { apiDocList.map((item, i) => {
                return <ApiPill key={i} apiId={i} apiDoc={item}/>
            })}
        </Box>
    )
}

export default LeftBar;