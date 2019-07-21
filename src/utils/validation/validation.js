import t from 'tcomb-form-native'

const Email = t.refinement(t.String, value => {
  return /@/.test(value)
});

const Password = t.refinement(t.String, value => {
    return value.length >= 6
})

export {
  Email,
  Password
}
