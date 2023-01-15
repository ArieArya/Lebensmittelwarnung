import * as React from 'react';
import Box from '@mui/material/Box';
import FoodComponent from './FoodComponent';
import ProductComponent from './ProductComponent';
import NotFoundComponent from './NotFoundComponent';

function ItemComponents( 
        { searchResult, notFound, filters } : 
        { searchResult:[], notFound:boolean, filters:string[] }) {
    return (
        <Box style={{ height: "80%" }}>
            { notFound 
                ? <NotFoundComponent/> 
                : searchResult.map((item:any, i:number) => {
                    return (
                        item._source._type == '.FoodWarning' 
                            ? <FoodComponent key={i} searchItem={item} filters={filters} />
                            : <ProductComponent key={i} searchItem={item}/>
                    )
                })
            }
        </Box>
    )
}

export default ItemComponents;