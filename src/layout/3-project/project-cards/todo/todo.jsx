import '../project-card.css'
import todoImg from '../../../../assets/images/todo-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'

export function Todo () {
  return (
    <article className='projectCard__Container'>
      <div className='projectCard'>
        <img src={todoImg} />
        <div className='projectCard__divText green-border-top'>
          <h2>To-Do List</h2>
          <ProjectStack techArray={techArray} />
          <p><span className='color-green'>2023</span></p>
          <p>
            Web application for task management <span className='color-green'>built with MVC architecture</span>. Creates projects,
            categorizes projects by color, organizes tasks by day, week, and month,
            open details of every task to add specific information for them.
          </p>
        </div>
      </div>
    </article>
  )
}

const techArray = [
  {
    class: 'devicon-javascript-plain colored',
    name: ''
  },
  {
    class: 'devicon-html5-plain colored',
    name: ''
  },
  {
    class: 'devicon-css3-plain colored',
    name: ''
  },
  {
    class: '',
    name: 'Vite'
  }
]