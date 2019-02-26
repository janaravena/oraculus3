# oraculus

## Ejercicios Modulo 3

### 1)Crear una app con sidemenu.
```
$ ionic start modulo3 sidemenu --type=ionic-angular --cordova

$ cd modulo3
```

Actualizar id y nombre de app en config.xml

Si se quiere agregar a un repositorio ya creado (pero vacío)

```
$ git remote add origin https://github.com/janaravena/oraculus3.git #por ejemplo
```

### 2)Agregar página chat y eliminar página List.
Dejar todo con Lazy Loading.
Un poco de visual en home y en el menú, a gusto.
Navbar como componente

```
$ ionic g page chat
$ ionic g component encabezado
```

### 3)Instalar y configurar paquete de Socket.io para Angular.
```
$ npm install ng-socket-io --save
```