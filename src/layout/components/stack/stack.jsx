import './stack.css'
import { TechCard } from './tech-card'
import viteIco from '../../../assets/icons/vite.svg'

export function Stack () {
  return (
    <div className='stackContainer'>
      <h3>Stack</h3>
      <div className='stack'>
        <TechCard iconName='devicon-html5-plain colored' name='HTML' />
        <TechCard iconName='devicon-css3-plain-wordmark colored' name='CSS' />
        <TechCard iconName='devicon-javascript-plain colored' name='Javascript' />
        <TechCard iconName='devicon-react-original colored' name='React' />
        <TechCard iconName='devicon-nodejs-plain colored' name='Node' />
        <TechCard iconName='devicon-express-original colored' name='Express' />
        <TechCard iconName='devicon-mongodb-plain colored' name='MongoDB' />
        <TechCard iconName='devicon-jest-plain colored' name='Jest' />
        <TechCard iconName='devicon-git-plain colored' name='Git' />
        <div className='stack__iconContainer'>
          <img src={viteIco} className='stack__icon' />
          <span>Vite</span>
        </div>
        <TechCard iconName='devicon-webpack-plain colored' name='Webpack' />
      </div>
    </div>
  )
}
