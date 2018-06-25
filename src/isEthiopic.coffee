REGEX = ///^[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D
\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0
\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C
\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE
\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E
\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]+$///

isEthiopic = (value) ->
  return REGEX.test value

module.exports = isEthiopic