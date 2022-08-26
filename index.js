let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (name) {
    return cats.push(name);
};

function destructivelyPrependCat (name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat () {
    return cats.pop();
};

function destructivelyRemoveFirstCat () {
    return cats.shift();
};

function appendCat (name) {
    let catsAppended = [...cats, name];
    return catsAppended;
};

function prependCat (name) {
    let catsPrepended = [name,...cats];
    return catsPrepended;
};

function removeLastCat () {
    let start = cats.length - 1;
    let catsLastRemoved = cats.slice(0, start);
    return catsLastRemoved;
};

function removeFirstCat () {
    let catsLastRemoved = cats.slice(1, cats.length);
    return catsLastRemoved;
};

console.log (removeLastCat());