import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  TableHead,
  Button,
  Avatar,
  Skeleton,
  Box
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { StyledTableCell, StyledTableRow, styles } from './styles'
import { Column, ITableComponent } from '../../interfaces'

const columns: readonly Column[] = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'albumId', label: 'Album Id', minWidth: 50 },
  { id: 'photo', label: 'Photo', minWidth: 150 },
  { id: 'title', label: 'Title', minWidth: 150 },
  { id: '', label: '', minWidth: 100 }
]

const TableComponent = ({
  data,
  searchName,
  rowsPerPage,
  page,
  lastPage,
  handleTitle,
  handleChange,
  handleChangeRowsPerPage,
  isLoading
}: ITableComponent) => {
  return (
    <Paper sx={styles.width100}>
      <TableContainer sx={styles.tableStyles}>
        {isLoading ? (
          <Box sx={styles.centeredSpinner}>
            <Skeleton variant="circular" width={40} height={40} />
          </Box>
        ) : (
          <Table sx={styles.minWidth} aria-label="table" stickyHeader>
            <TableHead >
              <TableRow style={styles.headerStyles}>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    sx={{ minWidth: column.minWidth, textAlign: 'center' }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.filter((row) => row.title.includes(searchName))
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell component="th" scope="row" align="center">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {row.albumId}
                    </TableCell>
                    <TableCell align="center" sx={styles.centerHorizontal}>
                      <Avatar
                        src={row.url}
                        alt={row.title}
                        sx={styles.avatarSize}
                        variant="square"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {row.title}
                    </TableCell>
                    <TableCell sx={styles.tableCellWidth} align="center">
                      <Button
                        variant="outlined"
                        onClick={() => handleTitle(row.id)}
                        endIcon={<DeleteIcon />}
                        color='inherit'
                      >
                        Delete Title
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {!isLoading && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={lastPage}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page'
            },
            native: true
          }}
          onPageChange={handleChange}
          ActionsComponent={TablePaginationActions}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  )
}

export default TableComponent
