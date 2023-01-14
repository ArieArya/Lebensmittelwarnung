import * as React from 'react';
import Box from '@mui/material/Box';
import FoodComponent from './FoodComponent';
import ProductComponent from './ProductComponent';
import NotFoundComponent from './NotFoundComponent';

function ItemComponents( { searchResult } : { searchResult:[]}) {
    return (
        <Box style={{ height: "80%" }}>
            {searchResult.length == 0 
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