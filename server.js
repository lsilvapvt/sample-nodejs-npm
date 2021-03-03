const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Buildpacks</title>
  </head>
  <body>
    <h1>Node.js Application Container Image Powered by Cloud Native Buildpacks</h1>
    <h3>Hostname: ` + process.env.HOSTNAME + `</h3>
    <br/>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/images/GUID-8546DDD9-718A-42F7-9EDB-0BCC3A316BB6-low.png"></img>
  </body>
</html>`);
});

app.listen(port);
