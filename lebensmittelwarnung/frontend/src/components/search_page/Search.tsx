import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RegionFilter from './RegionFilter';

interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
    regions: string[];
}

function Search({ setSearch, filters, setFilters, regions } : SearchProps ) {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{ width: 800, maxWidth: '90vw'}}>
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