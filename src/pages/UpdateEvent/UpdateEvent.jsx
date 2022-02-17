import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import UpdateForm from './UpateForm'
import { updateEvent, getEventById } from '../../services/eventService'

const UpdateEvent = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState()
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleUpdateEvent = async (e) => {
    e.preventDefault()
    try {
      const updatedEvent = await updateEvent(id, formData)
      navigate(`/events/${updatedEvent.updatedEvent._id}`)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const eventData = await getEventById(id)
      setFormData(eventData.event)
    }
    fetchEvent()
  }, [id])

  return (
    <UpdateForm
      handleChange={handleChange}
      handleUpdateEvent={handleUpdateEvent}
      validForm={validForm}
      setValidForm={setValidForm}
      formData={formData}
      setFormData={setFormData}
    />
  )

}

export default UpdateEvent