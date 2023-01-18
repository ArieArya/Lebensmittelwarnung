import * as React from 'react';
import Box from '@mui/material/Box';
import Search from "./Search";
import ItemComponents from './ItemComponents';
import AnimateHeight from 'react-animate-height';
import Fade from '@mui/material/Fade';
import StraightIcon from '@mui/icons-material/Straight';

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
    const [filteredResult, setFilteredResult] = React.useState<[]>([]);
    const [searchHeight, setSearchHeight] = React.useState<`${number}%`>('40%');
    const [notFound, setNotFound] = React.useState<boolean>(false);

    // set fetch function for search
    const fetchSearchData = () => {
        fetch(`api/search/${search}/`)
            .then(res => res.json())
            .then((result) => {
                // store raw search result
                setSearchResult(result.hits.hits);
                // filter and store filtered results
                filterSearchResult(result.hits.hits);
            });
    }

    // filter search result by region
    const filterSearchResult = (searchRes : []) => {
        const checkContainsAffectedRegion = (item : any) => {
            // base case
            if (filters.length === 0) {
                return true;
            }
            if (item._source.affectedStates) {
                for (const filter of filters) {
                    if (item._source.affectedStates.includes(filter)) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
        const filteredRes : any = searchRes.filter(checkContainsAffectedRegion);
        setFilteredResult(filteredRes);

        // check if result is non-empty
        setSearchHeight('20%');
        if (filteredRes.length === 0) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }

    // on change of search, fetch new data
    React.useEffect(() => {
        // fetch new data if search does not change in 500ms
        const timeoutFetch = setTimeout(() => {
            if (search !== '') {
                fetchSearchData();
            }
        }, 500);

        // reset to base arrangement if search is empty
        if (search === '') {
            setSearchHeight('40%');
            setNotFound(false);
            setSearchResult([]);
            setFilteredResult([]);
        }
        return () => {
            clearTimeout(timeoutFetch);
        }
    }, [search])

    // on change of filters, apply filter to search result
    React.useEffect(() => {
        if (search !== '') {
            filterSearchResult(searchResult);
        }
    }, [filters])

    return (
        <Box sx={{ height: '90vh', paddingTop: "90px" }}>
            {/* for Search */}
            <AnimateHeight className="animate-height" duration={500} height={searchHeight}>
                <Box sx={{ display: 'flex', height: '100% !important' }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            alignItems: 'end',
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

            {/* Landing page information */}
            <Fade in={search === ''}>
                <Box sx={{
                    display: 'flex',
                    justifyContent:'center', 
                    alignItems:'center', 
                    height: (searchResult.length === 0 && !notFound) ? '20vh' : '0vh'
                }}>
                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <StraightIcon fontSize="large"/>
                        <Box sx={{ marginTop: '20px', maxWidth: '40%', fontFamily: 'monospace', fontSize: '1.2em' }}>
                            Welcome to <b>Lebensmittelwarnung</b>. This registry contains <b>public warnings</b> about 
                            products as published by the <b>BVL</b>. Begin by <b>searching for any item</b> (e.g. chocolate). 
                        </Box>
                    </Box>
                </Box>
            </Fade>
            
            {/* for Displaying Items */}
            { 
                search === '' 
                    ? null
                    : <ItemComponents searchResult={filteredResult} notFound={notFound} filters={filters}/>
            }
        </Box>
    )
}

export default SearchPage;