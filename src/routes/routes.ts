<<<<<<< HEAD
import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

// const LazyPage1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
// );

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}
=======
import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[]
}


export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
   
]
>>>>>>> 974413b64e35c00c615f3e5e800f29cbedc10a4c
