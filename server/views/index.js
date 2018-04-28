module.exports = (render) => `
  <html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app">${render()}</div>
  </body>
  </html>
`;