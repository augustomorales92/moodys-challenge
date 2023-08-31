import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import TableComponent from './components/Table';
import SearchBar from './components/SearchBar';
import { getLastPage } from './utils';
import { Data } from './interfaces';



function App() {
  const [data, setData] = useState<Data[]>([])
  const [page, setPage] = useState<number>(0)
  const [lastPage, setLastPage] = useState<number>(0)
  const [searchName, setSearchName] = useState<string>('')
  const prevPageRef = useRef<number>(-1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // using useCallback to memoize the data ensures that if rowPerPage or searchName changes, the data will need to be recalculated
  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true)
    try {
      // implementing pagination prevents fetching 5000 records at once. It allows the user to specify the value of rows per page, enabling them to set the desired number
      // i decided to use 'fetch' instead of installing axios. I might consider using a library like 'react-query' to manage the data and save it in cache
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page+1}&_limit=${rowsPerPage}&title_like=${searchName}`
      )
      const dataResponse = await res.json()
      //in the API documentation, they provide advice regarding the information in the request headers. As a result, I decided to calculate the length of the dataset using the formula (number of pages * quantity/limit)
      const linkHeader = res.headers.get('link')
      const pageNumber = getLastPage(linkHeader)
      setLastPage(pageNumber * rowsPerPage)
      //this logic was used to prevent duplicate data. If the user goes back a page, there will be no duplicated data
      setData((prevData) => {
        const newData = dataResponse.filter((newItem: Data) =>
          !prevData.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prevData, ...newData];
      });
      
    } catch (e) {
      //that should be handled to display an error modal or toast for notification
      console.error('something went wrong, error: ', e)
    }
    setIsLoading(false)
  }, [rowsPerPage, searchName])

  useEffect(() => {
    // using the ref to prevent calling the function when the user goes to an inferior page
    if (page >= prevPageRef.current) {
      fetchData(page)
      prevPageRef.current = page
    } 
  }, [fetchData, page])

  const handleChange = (_event: React.MouseEvent<HTMLButtonElement> | null, value: number) => {
    setPage(value)
  }

const handleTitle = (id: number) => {
  const updateData = data.map((item: Data) => {
    if (item.id === id) {
      return { ...item, title: '' }
    }
    return item
  })
  setData(updateData)
}

const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
  setSearchName(event.target.value)
  setPage(0)
  prevPageRef.current = -1
}

const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
  prevPageRef.current = -1
};

  return (
    <Box style={{margin:'3rem'}}>
      <SearchBar searchName={searchName} handleSearch={handleSearch} />
      <TableComponent
        data={data}
        searchName={searchName}
        rowsPerPage={rowsPerPage}
        page={page}
        lastPage={lastPage}
        handleTitle={handleTitle}
        handleChange={handleChange}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        isLoading={isLoading}
      />
    </Box>
  )
}

export default App
