export const getLastPage = (headers: string | null): number => {
  const links = headers?.split(',').pop()
  const pageNumber = links?.replace(/.*_page=(\d+).*rel="last".*/, '$1')
  if (pageNumber) return +pageNumber
  return 0
}
