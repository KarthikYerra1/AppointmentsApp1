import {Component} from 'react'
import './index.css'
import {v4 as uid} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  displayStarredList = () => {
    const {appointmentsList} = this.state
    const starredAppointmentsList = appointmentsList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )
    this.setState({
      appointmentsList: starredAppointmentsList,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date, appointmentsList} = this.state
    const newAppointment = {
      id: uid(),
      title,
      date,
      isStarred: false,
    }
    this.setState({
      appointmentsList: [...appointmentsList, newAppointment],
      title: '',
      date: '',
    })
  }

  render() {
    const {title, date, appointmentsList} = this.state

    return (
      <div className="bg-container">
        <div className="appointments-container">
          <h1 className="appointment-heading">Add Appointment</h1>
          <div className="upper-container">
            <form onSubmit={this.onAddAppointment} className="inputs-container">
              <label className="label" htmlFor="title-input">
                TITLE
              </label>
              <input
                id="title-input"
                className="input-holder"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label className="label" htmlFor="date-input">
                DATE
              </label>
              <input
                id="date-input"
                className="input-holder"
                type="date"
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDate}
                value={date}
              />
              <button className="btn" type="submit">
                Add
              </button>
            </form>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="lower-container">
            <div className="appoint-star-container">
              <h1 className="lower-heading">Appointments</h1>
              <button
                className="starred-btn"
                type="button"
                onClick={this.displayStarredList}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointment={eachAppointment}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
