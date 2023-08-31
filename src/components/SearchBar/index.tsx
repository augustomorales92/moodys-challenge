import * as React from 'react'
import { Paper, IconButton, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styles } from './styles'
import { ISearchBar } from '../../interfaces'

const SearchBar = ({ searchName, handleSearch }: ISearchBar) => {
  return (
    <Box component="form" sx={styles.boxContainer}>
      <Paper>
        <IconButton type="button" sx={styles.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search…"
          value={searchName}
          onChange={handleSearch}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Paper>
    </Box>
  )
}

export default SearchBar
