// Isolate object so it is only created once
// (if not it would be instantiated for every product, causing a little memory inefficiency)
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
