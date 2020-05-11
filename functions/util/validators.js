const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(emailRegEx)) return true
  else return false
}

const isEmpty = (string) => {
  if (string.trim() === "") return true
  else return false
}

exports.validateSignupData = (data) => {
  let errors = {}

  //These are basic validations, using a npm package like hapi/joi would be best for more complex validations
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty"
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address"
  }

  if (isEmpty(data.password)) errors.password = "Must not be empty"
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match"
  if (isEmpty(data.handle)) errors.handle = "Must not be empty"

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

exports.validateLoginData = (data) => {
  let errors = {}

  if (isEmpty(data.email)) errors.email = "Must not be empty"
  if (isEmpty(data.password)) errors.password = "Must not be empty"

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

exports.reduceUserDetails = (data) => {
  // This function reduces the data sent from the frontend,
  // so if for example you don't send a bio, it will be reduced
  // here, instead of sending an empty string to the db
  let userDetails = {}

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      // Adding http if user did not add it
      userDetails.website = `http://${data.website.trim()}`
    } else userDetails.website = data.website
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location

  return userDetails
}
