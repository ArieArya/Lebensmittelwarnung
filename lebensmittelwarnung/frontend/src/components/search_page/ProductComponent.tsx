import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProductComponentProps {
    searchItem : any;
}

function ProductComponent({ searchItem } : ProductComponentProps ) {
    return (
        <Box className="itemBox">
            {/* Title */}
            <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "40px", fontFamily: 'monospace', fontWeight: 'bold'}}>
                <a style={{color: 'black'}} href={searchItem._source.link} target="_blank">{ searchItem._source.title }
                    <LaunchIcon sx={{ verticalAlign: "middle", marginLeft: "10px" }}/>
                </a>
            </Typography>
            
            {/* Description */}
            <Box className="descriptionBox">
                {/* 1st column */}
                <Box sx={{ flex: 1, m: 1}}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Brand Name
                    </Typography>
                    <Typography>
                        { searchItem._source.product.brandName }
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
                        Manufacturer
                    </Typography>
                    <Typography>
                        { searchItem._source.product.manufacturer }
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
                        Country of Origin
                    </Typography>
                    <Typography>
                        { searchItem._source.product.countryOfOrigin }
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
                    <Typography sx={{ fontWeight: "bold"}}>
                        Short Description
                    </Typography>
                    <Typography>
                        { searchItem._source.product.shortDescription ? searchItem._source.product.shortDescription.replace(/<\/?[^>]+(>|$)/g, "") : null}
                    </Typography>

                    <Typography sx={{ fontWeight: "bold",marginTop: "15px" }}>
                        Safety Information
                    </Typography>
                    <Typography>
                        { searchItem._source.rapexInformation ? searchItem._source.rapexInformation.message.replace(/<\/?[^>]+(>|$)/g, "") : null}
                    </Typography>
                </Box>

                {/* 3rd column */}
                <Box sx={{ flex: 1, m: 1, textAlign: "center"}}>
                    <img src={ searchItem._source.product.imageUrls[0]} style={{ maxWidth: "80%", maxHeight: "80%" }}></img>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductComponent;