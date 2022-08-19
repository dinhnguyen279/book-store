This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

9. implement add to cart action

   1. Check cart line items
   2. add or update item inthe cart
   3. Redirect t0 / cart
   4. show cart menu on header
   5. create CART_RETRIEVE actions
   6. show cart items in header

10. Create cart screen

    1. add cart items columns
    2. add cart sumary columns
    3. update cart item
    4. remove cart item
    5. proceed to checkout

11. Create Checkout Screen

    1. Create checkout form and order summary columns
    2. create steppers to make a wizard
    3. add customer details inputs
    4. add Shipping details inputs
    5. add Payment information inputs

12. Implement checkout actions
    1. Create Order
    2. Show error on creating order
    3. Set order in Context
    4. Redirect user to confirmation screen on success
13. Create order confirmation screen
    1. Show order summary
    2. Show order details
