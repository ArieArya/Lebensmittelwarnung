import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function FoodComponent({ searchItem } : { searchItem:any }) {
    return (
        <Box sx={{ margin: "20px 10vw 20px 10vw", p: 3, border: "1px solid", borderRadius: "15px" }}>
            {/* Title */}
            <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "40px", fontFamily: 'monospace', fontWeight: 'bold' }}>
                <a style={{color: 'black'}} href={searchItem._source.link} target="_blank">{ searchItem._source.title }</a>
            </Typography>
            
            {/* Description */}
            <Box sx={{ display: "flex" }}>
                {/* 1st column */}
                <Box sx={{ flex: 1, m: 1}}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Manufacturer
                    </Typography>
                    <Typography>
                        { searchItem._source.product.manufacturer }
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", marginTop: "5px" }}>
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

                    <Typography sx={{ fontWeight: "bold", marginTop: "5px" }}>
                        Affected States
                    </Typography>
                    { searchItem._source.affectedStates.map((state:string, i:number) => {
                        return <Chip key={i} label={state} sx={{ margin: "5px 5px 5px 0px" }} />
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