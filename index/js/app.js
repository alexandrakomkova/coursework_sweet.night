const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer(function(req, res)
{
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('../html/index.html', function(error, data)
  {
    if(error)
    {
      res.writeHead(404)
      res.write('Файл не найден')
    }
    else
    {
      res.write(data)
    }
    res.end()
  });

  
});
server.listen(port, function(error){
  if(error)
  {
    console.log('Ошибка на сервере', error);
  }
  else
  {
      console.log('Сервер прослушивает порт '+ port);
  }
});
