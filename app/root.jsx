import { useState, useEffect } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'




export function meta(){
  return(
    [
      { charset: 'utf-8' },
      { title: 'GuitarLA - Remix' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    ]
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App(){
  //Si este codigo es del navegador, agrega el localStorage, si no, no hagas nada. Si es del navegador devuelve el carrito
  //almacenado en LS, si no, devuelve un arreglo vacio
  const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || [] 
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (guitarra) => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      //Iterar sobre el arreglo, e identificar el elemento duplicado
      const carritoActualizado = carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          //Reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      //Añadir al carrito
      setCarrito(carritoActualizado)

    }else{
      //Guitarra nueva, agrego al carrito
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)//No es necesario el spread, ya que map devuelve un arreglo
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id)
    setCarrito(carritoActualizado)
  }

  return(
    <Document>
      <Outlet 
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra
        }}
      />
    </Document>
  )
}

function Document({children}){
  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

