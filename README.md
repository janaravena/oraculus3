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

usar https://ialechat.herokuapp.com/

### 4)Armar página para unirse al chat.

### 5)Agregar y armar página chatroom, utilizando observables y componente Toast.
```
$ ionic g page chatroom
```

**ionic cordova build android**
**ionic cordova run android --device**

### 6)Usar storage para manejar el nickname.
```
$ ionic cordova plugin add cordova-plugin-nativestorage
$ npm install --save @ionic-native/native-storage@4
```

### 7)Permitir tomar fotos desde el home.
```
$ ionic cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="Permitenos usar la camara" --variable PHOTOLIBRARY_USAGE_DESCRIPTION="permitenos usar la libreria"
$ npm install --save @ionic-native/camera@4
```

### 8)Agregar una nueva página que muestre la geolocalización actual y en tiempo real.
```
$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="usaremos tu ubicacion"
$ npm install --save @ionic-native/geolocation@4
```

### 9)Mostrar la dirección de la ubicación
```
$ ionic cordova plugin add cordova-plugin-nativegeocoder
$ npm install --save @ionic-native/native-geocoder@4
```

### 9)Listar seguimiento de posición en segundo plano.
```
$ ionic cordova plugin add cordova-plugin-mauron85-background-geolocation@alpha
$ npm install --save @ionic-native/background-geolocation@4
```

```
$ ionic cordova plugin add cordova-plugin-mauron85-background-geolocation@2.2.5
$ npm install --save @ionic-native/background-geolocation@3

$ ionic g provider tracker
```

https://stackoverflow.com/questions/54451976/background-geolocation-isnt-a-observable

### 10)Enviar seguimiento de posición por chat.
