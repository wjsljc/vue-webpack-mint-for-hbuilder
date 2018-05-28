import axios from 'axios';

const config = {
  timeout: 0,
  withCredentials: true, // cookie
}
const ajaxInstance = axios.create(config);

export function payment (url, params) {
  return ajaxInstance.post(url, params).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function patientList (params) {
  let url = 'http://test.jlrcare.com/doctor/service/patient/getAllPatientByUserId'
  return ajaxInstance.post(url, params).then((res) => {
    return Promise.resolve(res.data)
  })
}
