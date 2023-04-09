# starpage with manager docker

se trata de contenedores

- **apidocker** arranca y para contenedores con mediante peticiones get manologcode/apidocker, corre en

    http://localhost:8888/

- **startpage** pagina de inicio de los servicios

Creara manualmente el contenedor

    docker build --no-cache . -t manologcode/apidocker

    docker run -d -p 5000:5000 manologcode/apidocker



