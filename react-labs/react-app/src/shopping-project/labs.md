# Shopping App Labs

## Fetch data asynchronously

Update `ProductBrowser.tsx` to fetch data rather than use `generateProducts`.

Decide up front if you want to use `useEffect` or React Query (or some other library?).

1. Under `src/shopping-main`, create a file `shopping-dao.ts`. This is where fetch functions will go
2. In `shopping-dao.ts`, create a function `fetchAllProducts`.
3. `fetchAllProducts` should use async-await and fetch to retrieve the list of products from http://localhost:7500/products.
4. Back in ProductBrowser, use the DAO and either `useEffect` or React query to fetch the products data and then render it. 


