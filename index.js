const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

<<<<<<< HEAD

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
=======
function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1);
  return kittens;
}

function appendKitten(name) {
  return kittens.push(name);
}

function prependKitten(name) {
  return kittens.unshift(name);
>>>>>>> eb4dc7b272f6cd3388848148f7e0720d0d25a28c
}