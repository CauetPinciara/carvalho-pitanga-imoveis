interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

interface ApiError {
  status: number;
  name: string;
  message: string;
  details: Record<string, unknown>;
}

export interface ApiPaginationResponse<T> {
  data: T;
  meta: Meta;
}

export interface ApiErrorResponse {
  data: null;
  error: ApiError;
}
