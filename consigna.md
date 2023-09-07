# Guia de HERENCIA - Ejercicio 4

- *Sistema Gestión Facultad*

 Se pretende realizar una aplicación para una facultad que gestione la información sobre las personas 
 vinculadas con la misma y que se pueden clasificar en tres tipos: 
 estudiantes, profesores y personal de servicio. 

    • Por cada persona, se debe conocer: su nombre, su número de identificación. 

    
El ejercicio consiste, en primer lugar, en definir la jerarquía de clases de esta aplicación. 
A continuación, debe programar las clases definidas en las que, además de los constructores, 
hay que desarrollar los métodos correspondientes a las siguientes operaciones: 

* Validación de ingreso por persona. (home, que redirige a su sección)

* [Sección Profesores: ]
    • Matriculación de un estudiante en la materia "X"... (X - podría ser una lista desplegable)
    • Cargar notas en una tabla (materia), con lo siguiente:
        ID_materia, ID_alumno (automático), un nombre, tres calificaciones numéricas enteras.
    Nota: Al menos, cargar tres materias.

* Sección Alumnos: de consulta solamente, 
    • Tendrá un buscador del ID_materia que le mostrará en pantalla: 
    • las notas obtenidas, el promedio y la condición que se encuentra (aprobado/desaprobado)
    _Adicional_ barra de navegación de materias (anterior-siguiente)
    _Opcional_ Resultados finales: en un iframe mostrar un gráfico de barras con todas sus materias y promedios.
    

* Sección Maestranza: el empleado del personal de servicio, tendrá una vista de tarjetas o lista de 
    • productos de limmpieza de la cual podrá realizar el pedido correspondiente.
    • Diligencias: Hacer entrega de las invitaciones al acto.
    Usando la Api de Google maps, marcar tres ubicaciones distintas a partir de las direcciones (no una ruta).

* Todas las secciones tendrán un formulario, para comunicarse con la rectoría.

==================================================
### Colaboradores: Si resolvemos esto, podremos acondicionarlo a cualquier proyecto, cambiando la funcionalidad de acuerdo a la necesidad de cada página o aplicación.
==================================================