import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RegionFilter from './RegionFilter';

function Search(
        { setSearch, filters, setFilters, regions } : 
        { setSearch:any, filters:string[], setFilters:any, regions:string[] }) {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{ width: 600, maxWidth: '100%'}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <TextField 
                        fullWidth 
                        label="Search" 
                        id="Search" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <RegionFilter filters={filters} setFilters={setFilters} regions={regions}/>
                </div>
            </Box>
        </div>
    )
}

export default Search;