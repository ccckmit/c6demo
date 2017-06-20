var c6 = require('c6')

c6.loadImage(__dirname + '/demo_small.jpg', function (image) {
  console.log('load Image complete!')
  c6.drawCanvas('#chart1', function (ctx1, canvas1) {
    var weights
    ctx1.drawImage(image, 0, 0)
    ctx1.fillText('Hello World!', 10, 50)
    var idata = c6.getImageData(canvas1)
    c6.gray(idata)
    c6.drawCanvas('#chart2', function (ctx2) {
      ctx2.putImageData(idata, 0, 0)
    })
    idata = c6.getImageData(canvas1)
    c6.bright(idata, 50)
    c6.drawCanvas('#chart3', function (ctx) {
      ctx.putImageData(idata, 0, 0)
    })
    idata = c6.getImageData(canvas1)
    c6.threshold(idata, 128)
    c6.drawCanvas('#chart4', function (ctx) {
      ctx.putImageData(idata, 0, 0)
    })
    idata = c6.getImageData(canvas1)
    var blurData = c6.blurC(idata)
    c6.drawCanvas('#chart5', function (ctx) {
      ctx.putImageData(blurData, 0, 0)
    })
    idata = c6.getImageData(canvas1)
    var sharpenData = c6.sharpen(idata)
    c6.drawCanvas('#chart6', function (ctx) {
      ctx.putImageData(sharpenData, 0, 0)
    })
    idata = c6.getImageData(canvas1)
    var sobelData = c6.sobel(idata)
    c6.drawCanvas('#chart7', function (ctx) {
      ctx.putImageData(sobelData, 0, 0)
    })
    weights = [
      1, 1, 1,
      1, 0.7, -1,
      -1, -1, -1]
    idata = c6.getImageData(canvas1)
    var convData = c6.convolute(idata, weights, true)
    c6.drawCanvas('#chart8', function (ctx) {
      ctx.putImageData(convData, 0, 0)
    })
    weights = [
      -1, -1, -1,
      -1, 0.3, 1,
      1, 1, 1]
    idata = c6.getImageData(canvas1)
    var conv2Data = c6.convolute(idata, weights, true)
    c6.drawCanvas('#chart9', function (ctx) {
      ctx.putImageData(conv2Data, 0, 0)
    })
  })

  c6.view()
})
