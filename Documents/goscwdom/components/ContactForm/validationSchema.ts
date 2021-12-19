import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  customerName: Yup.string().required('Pole obowiązkowe'),
  phone: Yup.string().required('Pole obowiązkowe'),
})
