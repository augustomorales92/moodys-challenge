import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const styles = {
  tableCellWidth: {
    width: 160
  },
  avatarSize: {
    width: '6rem',
    height: '6rem'
  },
  centerHorizontal: {
    display: 'flex',
    justifyContent: 'center'
  },
  centeredText: {
    textAlign: 'center'
  },
  centeredSpinner: {
    minHeight: '40rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableStyles: {
    maxHeight: '40rem'
  },
  width100: {
    width: '100%'
  },
  minWidth: {
    minWidth: 400
  },
  headerStyles: {
    backgroundColor: 'black',
    color: 'white',
  }
}


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));