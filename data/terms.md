# **Términos de Servicio (ToS)**

Última actualización: 02 Diciembre 2025

El uso de la aplicación móvil Konti ("App") implica la aceptación plena y sin reservas de estos Términos de Servicio ("ToS"). La App es desarrollada y operada por Edzon Perez ("Desarrollador"). Al crear una cuenta y utilizar Konti, declaras haber leído y aceptado estos ToS.

## **1. Uso de la App y restricciones**

La App está diseñada para ayudar a los usuarios a registrar, organizar y consultar sus boletas electrónicas, así como recibir análisis automáticos mediante IA.

El usuario se compromete a lo siguiente:

- Utilizar la App únicamente para fines personales y legítimos.
- No emplearla para actividades ilícitas o que contravengan la normativa vigente en Perú.
- Asegurar que la información ingresada sea verídica y legal.
- No intentar manipular los sistemas de IA para fines indebidos.

El uso de la App está dirigido a personas mayores de 18 años.

## **2. Cuenta de usuario**

Para utilizar Konti es obligatorio crear una cuenta.
Los datos actuales requeridos son: correo electrónico, nombre y contraseña.
En el futuro, podrían solicitarse datos adicionales para funcionalidades opcionales, incluyendo DNI y foto.
El usuario es responsable de:

- Mantener la confidencialidad de sus credenciales.
- Toda acción realizada desde su cuenta.
- Notificar inmediatamente sobre accesos no autorizados.

## **3. Almacenamiento y sincronización de datos**

Konti almacena información en:

- Supabase (actual) y, más adelante, Cloudflare R2 para archivos.
- PostgreSQL para datos estructurados como montos, fecha, RUC, razón social y otros campos de boletas.
- Supabase Storage (actual): las imágenes de boletas se almacenan como archivos públicos debido a la configuración actual del bucket.

El usuario acepta que la foto de su boleta tendrá una URL accesible públicamente mientras esta configuración se mantenga.
La foto se conserva para que el usuario pueda revisarla en cualquier momento dentro de la App.

## **4. Procesamiento por IA**

La App utiliza una función en el backend que envía datos a la API de OpenAI para extraer texto mediante OCR y generar análisis fiscales.
En el futuro, el usuario podrá seleccionar otros modelos (Claude, Gemini u OpenAI).

Ningún dato se utiliza para entrenar dichos modelos.
El procesamiento es temporal y se ajusta estrictamente a las políticas del proveedor correspondiente.

## **5. Planes y suscripciones**

Konti ofrece:

- Plan gratuito: permite subir hasta 5 boletas al mes y usar 5 mensajes con Konti AI.
- Plan de pago: S/ 9.99 mensuales, con boletas ilimitadas y funcionalidades extendidas.

Las suscripciones son personales, mensuales y administradas mediante Google Play y RevenueCat.
Pueden cancelarse en cualquier momento a través de Google Play.
El acceso se mantiene hasta finalizar el ciclo de facturación actual.

## **6. Límites de responsabilidad respecto a IA**

Konti AI tiene capacidades informativas, entre ellas:

- Explicar por qué un gasto puede o no ser deducible.
- Resumir deducciones estimadas.
- Identificar comprobantes incompletos o inconsistentes.
- Dar consejos generales de documentación.

Y limitaciones:

- No brinda asesoría legal ni contable profesional.
- No reemplaza a un contador colegiado.
- No calcula impuestos exactos.
- No sugiere evasión ni estrategias tributarias.

El uso de la App no exime al usuario de sus obligaciones fiscales.
Para decisiones relevantes, siempre se recomienda consultar a un contador.

## **7. Propiedad intelectual**

Todos los contenidos, algoritmos, diseño, funcionalidades y materiales de la App pertenecen al Desarrollador.
El usuario recibe únicamente una licencia de uso personal y no comercial.

## **8. Actualizaciones y cambios**

La App puede implementar nuevas funciones, corregir errores o modificar componentes sin aviso previo.
Los presentes ToS pueden actualizarse. El uso continuado tras un cambio implica aceptación.

## **9. Jurisdicción y ley aplicable**

Estos Términos se rigen por las leyes de Perú.
Cualquier controversia será sometida a los tribunales competentes del territorio peruano.
Antes de iniciar acciones legales, las partes procurarán una solución amistosa mediante comunicación directa.

## **10. Contacto**

Para consultas relacionadas con estos Términos:
[soporte.konti@gmail.com](mailto:soporte.konti@gmail.com)
