import { ChangeEvent, MouseEvent } from 'react'

export interface Data {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

export interface ITableComponent {
  data: Data[]
  searchName: string
  rowsPerPage: number
  page: number
  lastPage: number
  handleTitle: (id: number) => void
  handleChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => void
  handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
}

export interface ISearchBar {
  searchName: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface Column {
  id: 'albumId'| 'id' |'title' | 'photo' | ''
  label: string
  minWidth?: number
  align?: 'center'
}
