# Application State Architecture Notes

- **Shared information:** The list of added products and their total quantity are needed in `ProductCard` for adding items, `Cart` for displaying and updating the list, and `CartSummary` for totals.
- **Why prop drilling is not ideal:** Passing cart state and update functions up to `App` and then down through `ProductList` into every `ProductCard` would add unnecessary coupling and clutter intermediate components.
- **When Context would be enough:** Context works well for rarely changing values such as a shopper name or interface language.
- **Why Redux Toolkit fits here:** The cart has frequent and varied updates such as add, remove, and clear. RTK gives the app a clear data flow, Immer-powered immutable updates, and Redux DevTools support.

## Testing Results and Structure

- **What works well:** State logic is encapsulated in `cartSlice`. `ProductCard` and `Cart` stay mostly presentational because they dispatch events without knowing how the data changes internally.
- **What could improve:** Reusable named selector functions could be added to `cartSlice.ts` instead of keeping every selector inline in components.
