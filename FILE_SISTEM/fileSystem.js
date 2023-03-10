/*[.::Javascript para estudiantes::.]------------------------------------------------------------------------
|Profesor: Ing. Asdrubal José Corales Pérez, +58-4811678, asdrubalcorales92@gmail.com                       |
|Tema: Operaciones útiles con File System: Crear,Eliminar,Leer,Modificar,Copiar,Cambiar nombre de archivo   |
-----------------------------------------------------------------------------------------------------------*/
/*Nota: todos los métodos (funciones) de este módulo son asíncronos, pero se pueden agregar métodos         |
|síncronos agregando la palabra Sync a sal final de sus nombres, ejemplo fs.rename() -> fs.renameSync(). Si |
|usas Sync no es necesario que uses la función de control, basta con asigar el resultado de la función a    |
|una variable local que puedes usar por ejemplo en console.log(), en el archivo fileSystem.js se observa    | 
|mejor este uso.                                                                                            |
-----------------------------------------------------------------------------------------------------------*/

//Declaración de variables más archivos y/o modulos externos:
const fs = require('fs');
const color = require('colors');//Add color
let err, contenido,error,xErr,errX,resp;

    //Funciones:
    leeArchivo();
    crearArchivo();
    //reNombrarArchivo();
    //addContenidoArchivo();
    eliminaArchivo();
    console.clear();

    function leeArchivo() //Leer el acintenido del archivo de ejemplo fileSytem.html
    {
        //fs.readFile('nombre de archivo','tipo de codificación de caracteres',llamada de la función de control);
        fs.readFile('fileSystem.html','utf-8',(err, contenido) =>{
        if(err)
        {
            //console.error('Ha ocurrido un error!\n'+err);
            throw err;//Detine la ejecución por completo cuando aparece el error
        }else{
            console.log(contenido.rainbow);
        }
        console.log('-Contenido revisado exitosamente!')});
    }

    resp = fs.readFileSync('fileSystem.html','utf-8');//<--Ejemplo de uso del Sync, según la nota.
    console.log('Lectura:\n'+resp);//para capturar algún error puedes usar try{}catch(err){}

    function crearArchivo()//Crea un archivo
    {
        fs.createWriteStream('archivoX.txt',{'flags':'a'},(r)=>{
            if(r)
            {
                throw r;
            }
            console.log('-Archivo creado!'.magenta.bold);});

            fs.writeFile('archivoX2.txt','contenido nuevo',(rr)=>{//Otra forma de crear un archivo
                if(rr)
                {
                    throw rr;
                }
            console.log('-Otro archivo creado'.cyan);
            });
    }

    function reNombrarArchivo() //Cambiar nombre a un archivo:
    {
        // fs.rename('nombre del archivo','nombre nuevo del archivo', función de control);
        fs.rename('fileSystem.txt','fileSistema.txt',(error)=>{
        //fileSistema
        if(error)
        {
            throw error;
        }
        console.log('-Nombre cambiado exitosamente!'.cyan.bold);});
    }

    function addContenidoArchivo()//Agregar Contenido al final del archivo:
    {
        fs.appendFile('fileSystem.html','<p>Hola mundo soy una nueva línea de código</p>',(errX)=>{
        if(errX)
        {
            throw errX;
        }
        console.log('-se ha modificado el archivo');});
    }

    function eliminaArchivo()//Eliminar un archivo:
    {
        fs.unlink('archivoX.txt',(xErr)=>{
            if(xErr)
            {
                throw xErr;
            }
            console.log('-Se ha eliminado el archivo'.bgYellow);});
    }