import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({params}){

  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  return guitarra
}

function Guitarra() {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  
  return (
    <div>$guitarraUrl</div>
  )
}

export default Guitarra