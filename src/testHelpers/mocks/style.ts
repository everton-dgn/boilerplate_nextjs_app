const idObj = new Proxy(
  {},
  {
    get: function getter(_target, key) {
      if (key === '__esModule') {
        return false
      }
      return key
    }
  }
)

module.exports = idObj
