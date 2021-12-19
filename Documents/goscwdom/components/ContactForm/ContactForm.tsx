import { Formik } from 'formik'
import * as React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import BlueButton from '../elements/Buttons'
import styles from './ContactForm.module.css'
import cx from 'classnames'
import { validationSchema } from './validationSchema'
const API_URL = 'https://goscwdom.codeholic.pl'

export interface IContactFormProps {
  title: string
  appointmentReasons: string[]
  workingDays: string[]
  hours: string[]
  consents: string
}

export default function ContactForm(props: IContactFormProps) {
  const { title, appointmentReasons, workingDays, hours, consents } = props
  const [requestStatus, setRequestStatus] = React.useState<{
    status: string
    message: string
  } | null>(null)
  return (
    <Container className={styles.root}>
      <h4>{title}</h4>
      <Formik
        initialValues={{
          customerName: '',
          customerEmail: '',
          phone: '',
          comment: '',
        }}
        onSubmit={async (data, actions) => {
          try {
            const formData = new FormData()
            Object.entries(data).forEach(([dataKey, dataValue]) => {
              formData.append(dataKey, dataValue)
            })
            actions.setSubmitting(true)
            const response = await fetch(
              `${API_URL}/wp-json/contact-form-7/v1/contact-forms/2325/feedback`,
              {
                method: 'POST',
                body: formData,
              }
            )
            const parsedResponse = await response.json()
            if (parsedResponse?.status && parsedResponse?.message) {
              setRequestStatus(parsedResponse)
            }
            actions.setSubmitting(false)
          } catch (e) {
            setRequestStatus({
              status: 'failed',
              message: 'Błąd wysyłania zapytania. Spróbuj ponownie.',
            })
          }
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className={cx(styles.formLabel, styles.withAsterisk)}>
                Imię i nazwisko:
              </Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                placeholder="np. Jan Kowalski"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customerName}
                className={styles.formInput}
                isInvalid={!!errors.customerName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.customerName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className={styles.formLabel}>
                Adres e-mail:
              </Form.Label>
              <Form.Control
                type="text"
                name="customerEmail"
                placeholder="np. imienazwisko@adres.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customerEmail}
                className={styles.formInput}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label className={cx(styles.formLabel, styles.withAsterisk)}>
                Numer telefonu:
              </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="np. 665 515 423"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={styles.formInput}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={styles.inputGroup} controlId="formHours">
              <Form.Label className={styles.formLabel}>
                Treść wiadomości:
              </Form.Label>
              <Form.Control
                type="text"
                name="comment"
                as="textarea"
                rows={10}
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                className={styles.formInput}
              />
            </Form.Group>
            <p className={styles.asteriskAnnotation}>Pola wymagane</p>
            <p>{consents}</p>
            {requestStatus && (
              <Alert
                variant={
                  requestStatus.status === 'mail_sent' ? 'success' : 'danger'
                }
              >
                {requestStatus.message}
              </Alert>
            )}
            <div className={styles.submitContainer}>
              <BlueButton
                text="Wyślij wiadomość"
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
