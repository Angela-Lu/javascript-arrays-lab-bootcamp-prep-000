let kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  kittens.splice(0, 0, name)
  return kittens
}

function removeLastKitten() {
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten() {
  return kittens.slice(1)
}

