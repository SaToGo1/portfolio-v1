import '../project-card.css'
import storeImg from '../../../../assets/images/store.jpg'
import { ProjectStack } from '../../../components/stack-project/project-stack'

export function FakeStore () {
  return (
    <article className='projectCard__Container'>
      <div className='projectCard'>
        <img src={storeImg} />
        <div className='projectCard__divText blue-border-top'>
          <h2>fake Store</h2>
          <ProjectStack techArray={techArray} />
          <p><span className='color-blue'>2023</span></p>
          <p>
            Store web application with <span className='color-blue'>responsive design</span>. Search products based on
            category and price, add and remove them from the cart, modify quantities, and purchase.
          </p>
        </div>
      </div>
    </article>
  )
}

const techArray = [
  {
    class: 'devicon-react-original colored', // REACT
    name: ''
  },
  {
    class: 'devicon-javascript-plain colored', // Js
    name: ''
  },
  {
    class: 'devicon-html5-plain colored', // HTML
    name: ''
  },
  {
    class: 'devicon-css3-plain colored', // CSS
    name: ''
  },
  {
    class: 'devicon-webpack-plain colored', // WEBPACK
    name: ''
  }
]
