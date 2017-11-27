define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
(function (Random) {
  describe("die", function () {
    it("returns an integer distribution from 1 to sideCount", function () {
      var sideCount = 1337;
      var dummy = function () {};
      spyOn(Random, "integer").andReturn(dummy);

      var actual = Random.die(sideCount);

      expect(Random.integer).toHaveBeenCalledWith(1, sideCount);
      expect(actual).toBe(dummy);
    });
  });
}(typeof module !== "undefined" ? require("random/lib/random") : Random));

return module.exports;});
