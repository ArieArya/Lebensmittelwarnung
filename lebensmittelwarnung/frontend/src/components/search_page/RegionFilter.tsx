import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function RegionFilter(
        { filters, setFilters, regions } : 
        { filters:string[], setFilters:any, regions:string[] }) {

    const handleChange = (event: SelectChangeEvent<typeof filters>) => {
        const {
            target: { value },
        } = event;
        setFilters(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
        
    return (
        <div>
            <FormControl sx={{ marginLeft: 1, width: 170, maxWidth: "20vw" }}>
                <InputLabel id="demo-multiple-checkbox-label">Affected Regions</InputLabel>
                <Select
                    multiple
                    value={filters}
                    onChange={handleChange}
                    input={<OutlinedInput label="Affected regions" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {regions.map((region) => (
                        <MenuItem key={region} value={region}>
                        <Checkbox checked={filters.indexOf(region) > -1} />
                        <ListItemText primary={region} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default RegionFilter;