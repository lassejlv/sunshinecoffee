/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CheckoutImport } from './routes/checkout'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create/Update Routes

const CheckoutRoute = CheckoutImport.update({
  id: '/checkout',
  path: '/checkout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/checkout': {
      id: '/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/checkout': typeof CheckoutRoute
  '/auth/login': typeof AuthLoginRoute
  '/products': typeof ProductsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/checkout': typeof CheckoutRoute
  '/auth/login': typeof AuthLoginRoute
  '/products': typeof ProductsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/checkout': typeof CheckoutRoute
  '/auth/login': typeof AuthLoginRoute
  '/products/': typeof ProductsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/checkout' | '/auth/login' | '/products'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/checkout' | '/auth/login' | '/products'
  id: '__root__' | '/' | '/checkout' | '/auth/login' | '/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CheckoutRoute: typeof CheckoutRoute
  AuthLoginRoute: typeof AuthLoginRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CheckoutRoute: CheckoutRoute,
  AuthLoginRoute: AuthLoginRoute,
  ProductsIndexRoute: ProductsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/checkout",
        "/auth/login",
        "/products/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/checkout": {
      "filePath": "checkout.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/products/": {
      "filePath": "products/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
