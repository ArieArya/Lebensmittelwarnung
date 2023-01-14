import * as React from 'react';
import Box from '@mui/material/Box';
import FoodComponent from './FoodComponent';
import ProductComponent from './ProductComponent';
import NotFoundComponent from './NotFoundComponent';

function ItemComponents( { searchResult, notFound } : { searchResult:[], notFound:boolean }) {
    return (
        <Box style={{ height: "80%" }}>
            { notFound 
                ? <NotFoundComponent/> 
                : searchResult.map((item:any, i:number) => {
                    return (
                        item._source._type == '.FoodWarning' 
                            ? <FoodComponent key={i} searchItem={item}/>
                            : <ProductComponent key={i} searchItem={item}/>
                    )
                })
            }
        </Box>
    )
}

export default ItemComponents;