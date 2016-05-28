const invariant = (check, message) => {
  if (!check) throw new Error(`Invariant failed: ${message}`)
}

export default invariant
