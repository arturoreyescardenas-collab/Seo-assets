# Flujo de edición de video (Arturo / EVP / ORIGEN)

## Regla
- **No usar ni mencionar Descript.** No se usa. No proponerlo, no asumirlo, no citarlo como opción.
- Si un skill (por ejemplo `edita-video-evp`) lo menciona, ignorar esa parte y seguir este flujo.
- Para videos de EVP: mismo flujo con Remotion, usando el skill `edita-video-evp-remotion`.

## Herramientas (todo corre en el PC de Arturo)

**Edición y render**
- **Remotion**: arma el video (captions, tarjetas, marca, cierre). Motor principal. Proyecto en `C:\Users\artur\EVP_Videos\remotion-prueba\`, plantilla `CatalinaVerde.tsx`.
- **ffmpeg**: convierte el video, sube el volumen con ganancia fija, mide el audio, genera la vista previa liviana y los cuadros de revisión.
- **Whisper (modelo medium)**: transcribe el audio y da los tiempos por palabra para los captions.

**Material de apoyo**
- Bancos de fotos gratis (Pexels, Unsplash, Pixabay): b-roll, rotando de fuente. No se usó en el video 24.
- Navegador integrado: buscar y bajar el b-roll.
- Python con PIL: hojas de contacto para elegir fotos y revisar cuadros.

**Entrega**
- Google Drive de escritorio (`G:\Mi unidad\Origen\`): ahí queda el video final.
- Vista previa liviana: se envía al chat para verla en el iPhone.

## Nota
Este entorno cloud no tiene acceso a esas rutas locales. Esta sección documenta el flujo; no se puede ejecutar desde aquí.
