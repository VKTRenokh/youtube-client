import { getCurrentRoute } from './get-current-route'

export const createRederictToQueryParams = () => ({
  queryParams: {
    rederictTo: getCurrentRoute(),
  },
})
