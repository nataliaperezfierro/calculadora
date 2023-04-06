CREADO POR:

Jonathan Gajardo: https://github.com/JonaFlan/calculadora.frontend
Valentín Urrea: https://github.com/ValentinUr/calculadora.frontend
Ximena Cortés: https://github.com/CortesRodriguez/calduladora.frontend
Natalia Pérez: https://github.com/nataliaperezfierro/calculadora


CALCULADORA.HTML

En la seccion de HEAD importamos las hojas de estilo de Bootstraps y "fonts family" de Google para diseñar la pagina. Incluye el título de la página y metadatos que permiten obtener información.

El body del documento se compone de varias secciones DIV, donde asignamos un contenedor de principal de nombre de clase base, el cual contendra al contenedor calculadora.

La pantalla esta representada por la etiqueta DIV de clase display. Para la sección de botones de la calculadora, se compone de etiquetas tablas, que dentro de sus contenidos hay  etiquetas button. Estas tienen clase e id que permitirá, posteriormente, con la utilización de Javascript, realizar cálculos que darán algún resultado.

Finalmente agregamos un sencillo pie de página estilizado por bootstrap, en el cual estan los nombres del equipo de trabajo.

Al final del body se importan los scripts de Bootstrap y el propio.


CALCULADORA.CSS

En el css damos estilo y diseño a nuestra calculadora. Entre los estilos que hemos aplicado los más destacados son los colores y los fondos. En segundo lugar, bordes, anchos de celda, fuentes y tamaños.


CALCULADORA.JS

Lineas 1 y 2: Se declara una constante con el contenido del elemento html con clase "display" y otra constante con un arreglo que contiene cada botón del documento.

Linea 4 hacia adelante: Se utiliza un ciclo for para recorrer cada botón y configurar su comportamiento con "onclick" (Cada botón se configura para que al momento de hacer click en él se verifique cual es su id y realice diferentes modificaciones al display en base a esto)

Si el id del botón es:
-atras: Se reestablece el display con ""
-borrar: Se crea una variable con el contenido del display en formato String para tomar los carácteres desde el primero hasta el penúltimo y asignarlos al display.
-igual y hay texto en el display: Se calcula la operación aritmética del display con el metodo "val" y se le asigna al display.
-igual y el display esta vacio: Se le asigna el String "Vacio" al display y desaparece tras 0.5 segundos.

Finalmente, si se presiona un botón diferente a los anteriores se le agrega su valor al display.
