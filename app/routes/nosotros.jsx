import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return (
    [
      {title: 'GuitarLA - Sobre Nosotros'},
      {description: 'Venta de Guitarras, blog de musica'}
    ]
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros'/>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet porta magna ac ornare. Donec sed dictum sapien. Aenean eu augue nisl. Morbi convallis a purus ac hendrerit. Nulla varius nunc ac mi tempus, viverra egestas sem suscipit. Mauris sit amet ante sit amet urna posuere malesuada. Mauris molestie rhoncus justo quis auctor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet porta magna ac ornare. Donec sed dictum sapien. Aenean eu augue nisl. Morbi convallis a purus ac hendrerit. Nulla varius nunc ac mi tempus, viverra egestas sem suscipit. Mauris sit amet ante sit amet urna posuere malesuada. Mauris molestie rhoncus justo quis auctor.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros