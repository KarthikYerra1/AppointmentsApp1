import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointment, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointment

  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item-container">
      <div className="title-star-container">
        <p className="title">{title}</p>
        <button
          className="star-btn"
          data-testid="star"
          type="button"
          onClick={onClickStar}
        >
          <img src={starImage} alt="star" />
        </button>
      </div>
      <p className="date-type">
        Date:
        {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
