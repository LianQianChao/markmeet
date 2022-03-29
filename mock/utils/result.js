function success(code, message, data) {
  code = code || 200
  message = message || 'OK'
  data = data || []
  return {
    code: code,
    message: message,
    data: data,
  }
}

function failure(code, message, data) {
  code = code || 400
  message = message || '失败'
  data = data || []
  return {
    code: code,
    message: message,
    data: data,
  }
}

export { success, failure }
