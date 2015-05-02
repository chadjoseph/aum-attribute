export default function (property, callback) {
  return function (e) {
    var target = e.currentTarget || this;
    var value = target[property] || target.getAttribute(property);

    callback(value);
  };
}

