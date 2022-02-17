import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import EventForm from './EventForm'
import { addEvent } from '../../services/eventService';

const CreateEvent = () => {
  const navigate = useNavigate()
  // const [event, setEvent] = useState()
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
  })
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleCreateEvent = async (e) => {
    e.preventDefault()
    try {
      const newEvent = await addEvent(formData)
      navigate(`/events/${newEvent.event._id}`)
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <EventForm 
        handleCreateEvent={handleCreateEvent}
        handleChange={handleChange}
        validForm={validForm}
        setValidForm={setValidForm}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}

export default CreateEvent