'use strict'

exports.ok = (values, res) => {
  let data = {
    status : 200,
    values : values
  }
  res.json(data)
  res.end()
}

exports.failed = (values, res) => {
  let data = {
    status : 400,
    values : values
  }
  res.json(data)
  res.end()
}