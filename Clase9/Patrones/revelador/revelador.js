const modulo1 = (function () {
  var x = true;
  var y = false;
  function getX() {
    return x;
  }

  return {
    getX: getX,
  };
})();
