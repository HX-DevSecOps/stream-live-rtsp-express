const express = require("express");
const app = express();

const { proxy, scriptUrl } = require("rtsp-relay")(app);
const Stream = require('node-rtsp-stream')

const handler = proxy({
  // url: `rtsp://admin:admin@10.0.1.2:554/feed`,
  url: `rtsp://admin:Abc12345@khaokheow.mine.nu:554/sms/HCPEurl/basevideo_LbjMWZlsftgtoQ8rz6ruN82ecQ1xD6g%2FCFIzVS3zSusEveJzQI5s6vtTKQZpSAqChvQYg4Vmn%2BP9z4Tyl%2Fw%2BTshdle32rnIdRb0iztQOXWig4%2FzVI3FQvkVJeDeo0YhPsH094ckr9T%2FLIWvdY5STU4%2B%2FTY1i7Ut7LOglKOZr6UDMjTM%2FH1ftXh14rLbTC6mIAzAZgNEJTQPsaGc07fD5tA%3D%3D`,
  // use to RTSP stream ffmpeg
  // url: `rtsp://localhost:8554/mystream`,
  // if your RTSP stream need credentials, include them in the URL as above
  // if use hik vision fix tcp
  transport: 'tcp',
  verbose: false,
});

// the endpoint our RTSP uses
app.ws("/api/stream", handler);

// this is an example html page to view the stream
app.get("/", (req, res) =>
  res.send(`
  <canvas id='canvas'></canvas>

  <script src='${scriptUrl}'></script>
  <script>
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream',
      canvas: document.getElementById('canvas')
    });
  </script>
`)
);

app.listen(2000);
