import * as React from 'react';
import Box from '@mui/material/Box';
import Search from "./Search";
import ItemComponents from './ItemComponents';
import AnimateHeight from 'react-animate-height';
import { LocationSearching } from '@mui/icons-material';

const regions = [
    "Alle Meldungen",
    "Baden-Württemberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"
];

function SearchPage() {
    const [search, setSearch] = React.useState<string>('')
    const [filters, setFilters] = React.useState<string[]>([]);
    const [searchResult, setSearchResult] = React.useState<[]>([]);
    const [searchHeight, setSearchHeight] = React.useState<`${number}%`>('80%');

    // set fetch function for search
    const fetchSearchData = () => {
        fetch(`api/search/${search}/`)
            .then(res => res.json())
            .then((result) => setSearchResult(result.hits.hits));
    }

    // on change of search, fetch new data
    React.useEffect(() => {
        if (search !== '') {
            fetchSearchData();
        }
        console.log(searchResult);

        if (search !== "") {
            setSearchHeight('20%');
        } else {
            setSearchHeight('80%');
        }
    }, [search, filters])

    return (
        <div>
            <Box sx={{ height: '100vh' }}>
                {/* for Search */}
                <AnimateHeight className="animate-height" duration={500} height={searchHeight}>
                    <Box sx={{ display: 'flex', height: '100% !important' }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '80%',
                                display: 'flex',
                                flexFlow: 'row nowrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Search 
                                setSearch={setSearch}
                                filters={filters} 
                                setFilters={setFilters}
                                regions={regions}
                            />
                        </Box>
                    </Box>
                    
                </AnimateHeight>
                
                {/* for Displaying Items */}
                { 
                    search === '' 
                        ? null
                        : <ItemComponents searchResult={searchResult}/>
                }
            </Box>
        </div>
    )
}

export default SearchPage;