export default class resultreturn<T> {
  pageNumber: number = 0;
  totalPages: number = 0;
  pageSize: number = 0;
  status: boolean = true;
  results: Array<T>;
  totalCount: number = 0;
}
