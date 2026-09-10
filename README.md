# DataMigra — sitio web

Código del sitio publicado en **https://www.datamigra.cl**

DataMigra es la plataforma pública del Núcleo Milenio MIGRA para consultar
estadísticas oficiales sobre migración en Chile: fuentes de datos, figuras y
materiales reutilizables.

Este repositorio contiene **únicamente el sitio web** (HTML, CSS, JavaScript y
las figuras publicadas). El código reproducible que genera los indicadores, las
tablas espejo y los policy briefs viven en el repositorio
[NucleoMIGRA/plataformaMIGRA](https://github.com/NucleoMIGRA/plataformaMIGRA).

## Estructura

```
index.html          Portada (español)
acerca.html         Acerca de
figuras.html        Catálogo completo de figuras
github.html         Repositorio: código, tablas, figuras y cómo citar
fuentes/            Ficha por fuente de datos (CASEN, SNM, EPE/INE-SNM,
                    Censo, MINEDUC, ENE, EPF, PDI)
en/                 Versión en inglés, con la misma estructura
assets/css/         Hoja de estilos
assets/js/          Catálogo de figuras, renderizadores, lightbox y
                    selector de idioma
assets/figures/     126 figuras publicadas, agrupadas por fuente
assets/img/         Logo, imágenes y favicon
CNAME               Dominio del sitio
sitemap.xml         Mapa del sitio para buscadores
```

Las direcciones en mayúsculas de la raíz (`CASEN.html`, `SNM.html`, …) y la
carpeta `engmd/` son redirecciones que conservan las URL de la versión anterior
del sitio y llevan a la página equivalente en la versión actual.

## Idiomas

El sitio está disponible en español (raíz) e inglés (`/en/`). El selector ES/EN
del encabezado mantiene la página en la que está el visitante al cambiar de
idioma.

## Publicación

El sitio se sirve con GitHub Pages desde la rama `main`. El archivo `CNAME`
mantiene el dominio `www.datamigra.cl` apuntando a este repositorio: **no debe
eliminarse ni modificarse**.

## Licencia

Contenido y código bajo [CC0 1.0 Universal](LICENSE).
