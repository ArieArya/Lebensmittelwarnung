import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LaunchIcon from '@mui/icons-material/Launch';

interface FoodComponentProps {
    searchItem : any;
    filters : string[];
}

function FoodComponent( { searchItem, filters } : FoodComponentProps) {
    return (
        <Box className="itemBox">
            {/* Title */}
            <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "40px", fontFamily: 'monospace', fontWeight: 'bold' }}>
                <a style={{color: 'black'}} href={searchItem._source.link} target="_blank">{ searchItem._source.title }
                    <LaunchIcon sx={{ verticalAlign: "middle", marginLeft: "10px" }}/>
                </a>
            </Typography>
            
            {/* Description */}
            <Box className="descriptionBox">
                {/* 1st column */}
                <Box sx={{ flex: 1, m: 1}}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Manufacturer
                    </Typography>
                    <Typography>
                        { searchItem._source.product.manufacturer }
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
                        Date Reported
                    </Typography>
                    <Typography>
                        { new Date(searchItem._source.publishedDate).toLocaleString() }
                    </Typography>
                </Box>

                {/* 2nd column */}
                <Box sx={{ flex: 2, m: 1}}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Warning
                    </Typography>
                    <Typography>
                        { searchItem._source.warning }
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
                        Affected States
                    </Typography>
                    { searchItem._source.affectedStates.map((state:string, i:number) => {
                        if (filters.includes(state)) {
                            return <Chip key={i} label={state} color="success" sx={{ margin: "5px 5px 5px 0px" }} />
                        } else {
                            return <Chip key={i} label={state} sx={{ margin: "5px 5px 5px 0px" }} />
                        }
                    })}
                </Box>

                {/* 3rd column */}
                <Box sx={{ flex: 1, m: 1, textAlign: "center"}}>
                    <img src={ searchItem._source.product.imageUrls[0]} style={{ maxWidth: "80%", maxHeight: "80%" }}></img>    
                </Box>
            </Box>
        </Box>
    )
}

export default FoodComponent;