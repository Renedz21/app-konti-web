# **Política de Privacidad**

Última actualización: 02 Diciembre 2025

Esta Política de Privacidad describe cómo Konti ("App") recopila, utiliza, almacena y protege la información personal de los usuarios. El uso de la App implica la aceptación de esta Política.

## **1. Información que recopilamos**

La App recopila las siguientes categorías de información:

### 1.1 Datos proporcionados por el usuario

- Nombre
- Correo electrónico
- Contraseña
- Información ingresada manualmente al registrar una boleta: monto total, razón social, descripción, si es gasto deducible, etc.
- En el futuro, podrían solicitarse datos adicionales para funcionalidades opcionales, incluyendo DNI y foto.

### 1.2 Datos provenientes de imágenes

- Fotografías de boletas o facturas capturadas por el usuario.
- Texto extraído mediante OCR.

Las imágenes se almacenan en Supabase Storage como archivos públicos debido a la configuración actual del bucket. Más adelante serán migradas a Cloudflare R2.

### 1.3 Datos técnicos

- Tipo de dispositivo
- Sistema operativo
- Versión de la App
- Información necesaria para mejorar el rendimiento y detectar errores.

## **2. Propósito del tratamiento de datos**

Los datos se utilizan para:

- Crear y gestionar la cuenta del usuario.
- Registrar boletas mediante entrada manual u OCR.
- Mostrar y organizar los comprobantes a lo largo del tiempo.
- Enviar la imagen a una función del backend que integra la API de OpenAI para extraer texto.
- Generar análisis fiscales aproximados mediante Konti AI.
- Permitir la sincronización entre dispositivos.
- Garantizar la seguridad de la App.

## **3. Uso de IA y servicios de terceros**

La App procesa imágenes y texto usando una función conectada a la API de OpenAI.
En el futuro, el usuario podrá elegir otros proveedores.

Los datos enviados a OpenAI no se utilizan para entrenar sus modelos.

El procesamiento es temporal y estrictamente necesario para entregar la funcionalidad.

## **4. Almacenamiento y seguridad**

### 4.1 Bases de datos

Los datos estructurados (monto, RUC, razón social, fecha, tipo de comprobante y otros) se almacenan en PostgreSQL.

### 4.2 Imágenes

Las fotos subidas por el usuario se almacenan como archivos públicos en Supabase Storage, lo que significa que poseen una URL accesible.
Cuando se migre a Cloudflare R2, se mantendrá almacenamiento persistente.

### 4.3 Cifrado

Todas las comunicaciones se realizan mediante HTTPS/TLS.
El cifrado en reposo depende de las capacidades nativas del proveedor (Supabase y Cloudflare).

### 4.4 Conservación

La información permanece almacenada mientras la cuenta esté activa.
Las imágenes no se eliminan automáticamente tras el procesamiento.

## **5. Acceso y control de los datos**

Actualmente, la App permite:

- Ver información y fotos de las boletas.
- Compartir la URL pública de la imagen.

Próximamente se incluirán:

- Eliminación completa de la cuenta y todos sus datos.
- Exportación de datos en formatos descargables.

## **6. Menores de edad**

Konti está dirigida a personas mayores de 18 años.
No se recopila información de menores de manera intencional.

## **7. Transferencia de datos**

Los datos no se venden ni se ceden a terceros.
Únicamente se comparten con proveedores estrictamente necesarios para el funcionamiento:

- Supabase (auth, base de datos, storage).
- Cloudflare (almacenamiento futuro).
- OpenAI (procesamiento temporal de OCR y análisis).

Todos actúan según sus propias políticas de privacidad.

## **8. Responsabilidad del usuario**

El usuario es responsable de:

- Subir únicamente documentos propios o cuya posesión esté permitida.
- No subir información falsa o fraudulenta.
- No utilizar la App con fines ilícitos.
- Controlar la privacidad de las imágenes que se almacenan públicamente.

## **9. Cambios a esta Política**

La Política puede actualizarse.
El uso continuado implica aceptación de la versión más reciente.

## **10. Contacto**

Para cualquier consulta o solicitud relacionada con privacidad:
[soporte.konti@gmail.com](mailto:soporte.konti@gmail.com)
