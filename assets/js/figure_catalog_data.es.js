window.dataMigraFigureCatalog = {
  casen: {
    id: "casen",
    label: "CASEN",
    title: "CASEN",
    summary: "Indicadores sobre condiciones de vida, territorio y brechas socioeconómicas en población migrante y chilena.",
    href: "fuentes/casen.html",
    groups: [
      {
        id: "serie-completa",
        label: "Serie completa",
        title: "Serie completa",
        description: "Evolución en el tiempo de los principales indicadores demográficos, educativos y laborales comparables en CASEN.",
        caption: "Fuente: Elaboración propia con datos de CASEN.",
        figures: [
          { number: "1", src: "assets/figures/casen/figura_01_stock_migrantes.png", title: "Stock de población migrante", meta: "Evolución del peso de la población migrante en la población total." },
          { number: "2", src: "assets/figures/casen/figura_02_participacion_laboral.png", title: "Participación laboral", meta: "Comparación de la participación laboral entre población migrante y chilena." },
          { number: "3", src: "assets/figures/casen/figura_03_tasa_desocupacion.png", title: "Tasa de desocupación", meta: "Comparación de la desocupación entre población migrante y chilena dentro de la fuerza de trabajo." },
          { number: "4", src: "assets/figures/casen/figura_04_ingreso_laboral_total.png", title: "Ingreso laboral total promedio", meta: "Comparación del ingreso laboral total promedio entre población migrante y chilena." },
          { number: "5", src: "assets/figures/casen/figura_05_horas.png", title: "Horas habituales trabajadas", meta: "Promedio semanal de horas trabajadas según condición migratoria." },
          { number: "6", src: "assets/figures/casen/figura_06_contrato.png", title: "Condición contractual", meta: "Proporción de personas ocupadas con contrato de trabajo." },
          { number: "7", src: "assets/figures/casen/figura_07_salario_hora.png", title: "Salario por hora", meta: "Comparación del ingreso horario promedio entre migrantes y chilenos." },
          { number: "8", src: "assets/figures/casen/figura_08_escolaridad.png", title: "Escolaridad promedio", meta: "Años promedio de escolaridad en población de 25 a 50 años." },
          { number: "9", src: "assets/figures/casen/figura_09_pobreza_multi.png", title: "Pobreza multidimensional", meta: "Incidencia de pobreza multidimensional por condición migratoria." }
        ]
      },
      {
        id: "casen-2024",
        label: "CASEN 2024",
        title: "Último año disponible",
        description: "Caracterización reciente de la población migrante en la edición 2024, desde la distribución territorial hasta brechas habitacionales y perfil socioeconómico.",
        figures: [
          { number: "10", src: "assets/figures/casen/figura_10_migrantes_region.png", title: "Población migrante por región", meta: "Distribución regional de la población migrante en el último año disponible.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "11", src: "assets/figures/casen/figura_11_mapa_comunal_migrantes.png", title: "Mapa comunal de población migrante", meta: "Distribución territorial comunal de la población migrante en el último año disponible.", caption: "Fuente: Elaboración propia con panel armonizado CASEN 2024.", cardClass: "figure-card-map" },
          { number: "12", src: "assets/figures/casen/figura_12_hacinamiento.png", title: "Distribución según nivel de hacinamiento", meta: "Comparación entre población migrante y chilena según condiciones habitacionales.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "13", src: "assets/figures/casen/figura_13_rural.png", title: "Distribución urbano-rural", meta: "Participación relativa de la población residente en zonas rurales.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "14", src: "assets/figures/casen/figura_14_migrantes_quintil.png", title: "Distribución por quintil", meta: "Participación de la población migrante según quintil de ingreso.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "15", src: "assets/figures/casen/figura_15_educ_sup_25_50.png", title: "Educación superior entre 25 y 50 años", meta: "Comparación entre población migrante y chilena en edades centrales.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "16", src: "assets/figures/casen/figura_16_piramide_migrantes_2024.png", title: "Pirámide poblacional de migrantes", meta: "Estructura por edad y sexo de la población migrante en el último año disponible.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "17", src: "assets/figures/casen/figura_17_piramide_nativos_2024.png", title: "Pirámide poblacional de chilenos", meta: "Estructura por edad y sexo de la población chilena en el último año disponible.", caption: "Fuente: Elaboración propia con datos de CASEN." },
          { number: "18", src: "assets/figures/casen/figura_18_perfil_socioeconomico_2024.png", title: "Perfil comparado de integración socioeconómica", meta: "Educación superior, participación laboral y contrato entre ocupados para población migrante y chilena.", caption: "Fuente: Elaboración propia con panel armonizado CASEN 2024." },
          { number: "19", src: "assets/figures/casen/figura_19_condiciones_vida_2024.png", title: "Condiciones de vida y territorio", meta: "Brechas en pobreza multidimensional, hacinamiento y residencia rural.", caption: "Fuente: Elaboración propia con panel armonizado CASEN 2024." },
          { number: "20", src: "assets/figures/casen/figura_20_regiones_migrantes_2024.png", title: "Regiones con mayor número de migrantes", meta: "Número estimado de migrantes y proporción sobre la población regional.", caption: "Fuente: Elaboración propia con panel armonizado CASEN 2024." },
          { number: "21", src: "assets/figures/casen/figura_21_piramide_migrantes_2024.png", title: "Estructura por sexo y edad de la población migrante", meta: "Pirámide poblacional de la población migrante basada en factores de expansión.", caption: "Fuente: Elaboración propia con panel armonizado CASEN 2024." }
        ]
      }
    ]
  },
  snm: {
    id: "snm",
    label: "SNM",
    title: "Servicio Nacional de Migraciones",
    summary: "Registros administrativos sobre residencias, resultados de tramitación y perfiles de actividad.",
    href: "fuentes/snm.html",
    groups: [
      {
        id: "residencias-temporales",
        label: "Residencias temporales",
        title: "Residencias temporales",
        description: "Solicitudes, resoluciones y perfiles recientes de la residencia temporal en el ciclo administrativo actual.",
        caption: "Fuente: Elaboración propia con datos del Servicio Nacional de Migraciones.",
        figures: [
          { number: "1", src: "assets/figures/snm/figura_01_rt_solicitudes.png", title: "Solicitudes de residencia temporal", meta: "Evolución del número de solicitudes de residencia temporal." },
          { number: "2", src: "assets/figures/snm/figura_02_rt_aprobadas.png", title: "Residencias temporales aprobadas", meta: "Evolución anual de residencias temporales aprobadas." },
          { number: "3", src: "assets/figures/snm/figura_03_rt_resueltas_resultado.png", title: "Residencias temporales resueltas por resultado", meta: "Distribución de resultados en las solicitudes de residencia temporal resueltas." },
          { number: "4", src: "assets/figures/snm/figura_04_origen_solicitud_rt.png", title: "Origen de la solicitud temporal", meta: "Distribución por vía de ingreso de la solicitud temporal." },
          { number: "5", src: "assets/figures/snm/figura_05_rt_beneficios_2025.png", title: "Beneficios principales en residencia temporal", meta: "Distribución de los principales beneficios otorgados en residencia temporal." },
          { number: "6", src: "assets/figures/snm/figura_06_rt_nacionalidades_2025.png", title: "Nacionalidades principales en residencia temporal", meta: "Ranking de nacionalidades en las residencias temporales aprobadas del último año disponible." },
          { number: "7", src: "assets/figures/snm/figura_07_rt_actividad_distribucion.png", title: "Actividad principal en residencias temporales aprobadas", meta: "Distribución porcentual de actividades entre residencias temporales aprobadas." }
        ]
      },
      {
        id: "residencias-definitivas",
        label: "Residencias definitivas",
        title: "Residencias definitivas",
        description: "Resultados, composición y distribución territorial de la residencia definitiva dentro del proceso migratorio regular.",
        caption: "Fuente: Elaboración propia con datos del Servicio Nacional de Migraciones.",
        figures: [
          { number: "8", src: "assets/figures/snm/figura_08_rd_solicitudes.png", title: "Solicitudes de residencia definitiva", meta: "Evolución del número de solicitudes de residencia definitiva." },
          { number: "9", src: "assets/figures/snm/figura_09_rd_aprobadas.png", title: "Residencias definitivas aprobadas", meta: "Evolución anual de residencias definitivas aprobadas." },
          { number: "10", src: "assets/figures/snm/figura_10_rd_resueltas_resultado.png", title: "Residencias definitivas resueltas por resultado", meta: "Otorgadas, rechazadas y archivadas en residencia definitiva." },
          { number: "11", src: "assets/figures/snm/figura_11_rd_actividad_distribucion.png", title: "Actividad principal en residencias definitivas aprobadas", meta: "Distribución porcentual de actividades entre quienes obtienen residencia definitiva." },
          { number: "12", src: "assets/figures/snm/figura_12_rd_regiones_2025.png", title: "Residencias definitivas aprobadas por región", meta: "Distribución regional del último año disponible, en orden norte-sur." },
          { number: "13", src: "assets/figures/snm/figura_13_sexo_residencias_favorables_2025.png", title: "Sexo en residencias favorables", meta: "Composición por sexo en resultados favorables." },
          { number: "14", src: "assets/figures/snm/figura_14_tasa_aprobacion.png", title: "Tasa de aprobación", meta: "Comparación de la tasa de aprobación por tipo de residencia." }
        ]
      },
      {
        id: "otros-procesos",
        label: "Otros procesos",
        title: "Refugio y otros procesos",
        description: "Lectura complementaria sobre solicitudes y resoluciones de refugio dentro de la administración migratoria reciente.",
        caption: "Fuente: Elaboración propia con datos del Servicio Nacional de Migraciones.",
        figures: [
          { number: "15", src: "assets/figures/snm/figura_15_refugio_series.png", title: "Serie de refugio", meta: "Solicitudes y resultados del sistema de refugio." },
          { number: "16", src: "assets/figures/snm/figura_16_refugio_nacionalidades_2025.png", title: "Nacionalidades principales en refugio", meta: "Distribución por nacionalidad de las resoluciones de refugio del último año disponible." }
        ]
      }
    ]
  },
  epe: {
    id: "epe",
    label: "EPE / INE-SNM",
    title: "Estimación de Población Extranjera",
    summary: "Magnitud, composición por sexo y aproximación al componente irregular en la estimación oficial.",
    href: "fuentes/epe_ine.html",
    groups: [
      {
        id: "evolucion-stock",
        label: "Evolución del stock",
        title: "Evolución del stock",
        description: "Trayectoria del volumen estimado de población extranjera y cambio en la composición por sexo y nacionalidad.",
        caption: "Fuente: Elaboración propia con datos INE-SNM.",
        figures: [
          { number: "1", src: "assets/figures/epe_ine_snm/figura_01_stock_nacional.png", title: "Población extranjera estimada en Chile", meta: "Evolución anual del stock total estimado." },
          { number: "2", src: "assets/figures/epe_ine_snm/figura_02_stock_por_sexo.png", title: "Población extranjera estimada por sexo", meta: "Serie anual por sexo." },
          { number: "3", src: "assets/figures/epe_ine_snm/figura_03_principales_nacionalidades_2023.png", title: "Principales nacionalidades", meta: "Participación relativa de los principales países de origen." },
          { number: "4", src: "assets/figures/epe_ine_snm/figura_04_series_principales_paises.png", title: "Series de principales países", meta: "Evolución conjunta de las principales nacionalidades." }
        ]
      },
      {
        id: "distribucion-territorial",
        label: "Distribución territorial",
        title: "Distribución territorial",
        description: "Concentración regional y comunal de la población extranjera estimada, desde la distribución general hasta la concentración en comunas específicas.",
        caption: "Fuente: Elaboración propia con datos INE-SNM.",
        figures: [
          { number: "5", src: "assets/figures/epe_ine_snm/figura_05_distribucion_regional_2023.png", title: "Distribución regional 2023", meta: "Distribución regional de la población extranjera en orden norte-sur." },
          { number: "6", src: "assets/figures/epe_ine_snm/figura_06_cambio_regional.png", title: "Cambio regional acumulado", meta: "Variación absoluta entre el primer y el último año disponible." },
          { number: "7", src: "assets/figures/epe_ine_snm/figura_07_top_comunas_2023.png", title: "Comunas con mayor población extranjera estimada", meta: "Ranking comunal según número estimado de personas extranjeras." },
          { number: "8", src: "assets/figures/epe_ine_snm/figura_08_concentracion_comunal_2023.png", title: "Concentración comunal del stock estimado", meta: "Síntesis territorial complementaria del stock estimado." }
        ]
      },
      {
        id: "perfil-demografico",
        label: "Perfil demográfico",
        title: "Perfil demográfico",
        description: "Estructura por sexo y edad de la población extranjera estimada y peso relativo de niñas, niños y adolescentes.",
        caption: "Fuente: Elaboración propia con datos INE-SNM.",
        figures: [
          { number: "9", src: "assets/figures/epe_ine_snm/figura_09_edad_sexo_2023.png", title: "Estructura por sexo y edad", meta: "Pirámide demográfica de la población extranjera estimada en el último año disponible." },
          { number: "10", src: "assets/figures/epe_ine_snm/figura_10_nna_por_pais_2023.png", title: "Niñas, niños y adolescentes por nacionalidad", meta: "Participación de 0 a 19 años dentro de cada nacionalidad." }
        ]
      },
      {
        id: "componente-irregular",
        label: "Componente irregular",
        title: "Componente irregular",
        description: "Bloque final sobre el componente irregular dentro del stock estimado, primero por nacionalidad y luego por territorio.",
        caption: "Fuente: Elaboración propia con datos INE-SNM.",
        figures: [
          { number: "11", src: "assets/figures/epe_ine_snm/figura_11_irregular_pais_2023.png", title: "Componente irregular por país", meta: "Peso relativo del componente irregular según nacionalidad en la estimación disponible." },
          { number: "12", src: "assets/figures/epe_ine_snm/figura_12_irregular_region_2023.png", title: "Componente irregular por región", meta: "Participación y volumen de población irregular en regiones con estimación disponible." }
        ]
      }
    ]
  },
  censo: {
    id: "censo",
    label: "Censo",
    title: "Censo",
    summary: "Comparaciones entre censos y estructura demográfica de la población nacida fuera de Chile.",
    href: "fuentes/censo.html",
    groups: [
      {
        id: "tamano-territorio",
        label: "Tamaño y distribución territorial",
        title: "Tamaño y distribución territorial",
        description: "Comenzar por la magnitud de la población nacida fuera de Chile y su distribución entre regiones y comunas.",
        caption: "Fuente: Elaboración propia con microdatos oficiales de los censos 2017 y 2024.",
        figures: [
          { number: "1", src: "assets/figures/censo/figura_01_region_migrantes_2017_2024.png", title: "Población nacida fuera de Chile por región", meta: "Comparación del volumen de población nacida fuera de Chile por región entre ambos censos." },
          { number: "2", src: "assets/figures/censo/figura_02_share_migrantes_region_2017_2024.png", title: "Participación regional de la población nacida fuera de Chile", meta: "Proporción de población nacida fuera de Chile sobre el total regional en 2017 y 2024." },
          { number: "3", src: "assets/figures/censo/figura_03_cambio_share_region_2017_2024.png", title: "Cambio en la participación migrante por región", meta: "Comparación entre 2017 y 2024 del peso de la población nacida fuera de Chile dentro de cada región." },
          { number: "4", src: "assets/figures/censo/figura_04_region_migrantes_2024.png", title: "Población migrante por región 2024", meta: "Distribución regional de la población nacida fuera de Chile en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "5", src: "assets/figures/censo/figura_05_top_comunas_2024.png", title: "Comunas con mayor población migrante 2024", meta: "Ranking comunal según número de personas migrantes en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." }
        ]
      },
      {
        id: "perfil-demografico",
        label: "Perfil demográfico",
        title: "Perfil demográfico",
        description: "Luego, estructura por sexo, edad y llegada a Chile para describir la composición reciente de la población migrante.",
        figures: [
          { number: "6", src: "assets/figures/censo/figura_06_piramide_migrante_2024.png", title: "Pirámide migrante 2024", meta: "Estructura por sexo y edad de la población nacida fuera de Chile en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "7", src: "assets/figures/censo/figura_07_sexo_migrantes_2024.png", title: "Sexo de la población migrante 2024", meta: "Composición por sexo de la población nacida fuera de Chile en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "8", src: "assets/figures/censo/figura_08_estructura_etaria_migrante_2024.png", title: "Estructura etaria 2024", meta: "Grandes tramos de edad de la población nacida fuera de Chile en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "9", src: "assets/figures/censo/figura_09_periodo_llegada_2024.png", title: "Periodo de llegada a Chile", meta: "Cohortes de llegada observadas en 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "10", src: "assets/figures/censo/figura_10_sexo_migrantes_2017_2024.png", title: "Composición por sexo de la población migrante", meta: "Comparación entre 2017 y 2024." },
          { number: "11", src: "assets/figures/censo/figura_11_estructura_etaria_migrante_2017_2024.png", title: "Estructura etaria de la población migrante", meta: "Comparación entre 2017 y 2024." }
        ]
      },
      {
        id: "capital-humano-hogares",
        label: "Capital humano y hogares",
        title: "Capital humano y hogares",
        description: "Una lectura de escolaridad, hogares y vínculos familiares para entender brechas y composición social de la población migrante.",
        figures: [
          { number: "12", src: "assets/figures/censo/figura_12_escolaridad_promedio_25_50.png", title: "Escolaridad promedio 25-50", meta: "Comparación por lugar de nacimiento." },
          { number: "13", src: "assets/figures/censo/figura_13_educacion_superior_25_50.png", title: "Educación superior 25-50", meta: "Comparación por lugar de nacimiento." },
          { number: "14", src: "assets/figures/censo/figura_14_escolaridad_25_50_2024.png", title: "Escolaridad 25-50 en 2024", meta: "Promedio de años de estudio.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "15", src: "assets/figures/censo/figura_15_educacion_superior_2024.png", title: "Educación superior en 2024", meta: "Personas de 25 a 50 años con educación superior.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." },
          { number: "16", src: "assets/figures/censo/figura_16_hogares_con_migrantes.png", title: "Hogares con al menos una persona migrante", meta: "Cambio entre 2017 y 2024." },
          { number: "17", src: "assets/figures/censo/figura_17_jefatura_hogar_migrante.png", title: "Hogares con jefatura migrante", meta: "Cambio entre 2017 y 2024." },
          { number: "18", src: "assets/figures/censo/figura_18_hijos_promedio_mujeres_18_50.png", title: "Hijos promedio en mujeres de 18 a 50 años", meta: "Comparación por lugar de nacimiento." },
          { number: "19", src: "assets/figures/censo/figura_19_hijo_nacido_en_chile_2017.png", title: "Mujeres con hijo nacido en Chile", meta: "Proporción observada entre mujeres migrantes en el Censo 2017.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2017." },
          { number: "20", src: "assets/figures/censo/figura_20_urbano_rural_2017_2024.png", title: "Distribución urbano-rural", meta: "Comparación por lugar de nacimiento." }
        ]
      },
      {
        id: "paises-nacimiento",
        label: "Países de nacimiento",
        title: "Países de nacimiento",
        description: "Después, la composición nacional de la población nacida fuera de Chile en ambos censos y en cada fotografía censal.",
        figures: [
          { number: "21", src: "assets/figures/censo/figura_21_principales_paises_nacimiento.png", title: "Principales países de nacimiento", meta: "Comparación entre 2017 y 2024." },
          { number: "22", src: "assets/figures/censo/figura_22_principales_paises_2017.png", title: "Principales países 2017", meta: "Países de nacimiento en el Censo 2017.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2017." },
          { number: "23", src: "assets/figures/censo/figura_23_principales_paises_2024.png", title: "Principales países 2024", meta: "Países de nacimiento en el Censo 2024.", caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2024." }
        ]
      },
      {
        id: "comparaciones-historicas",
        label: "Comparaciones históricas",
        title: "Comparaciones históricas",
        description: "La sección cierra con figuras específicas del Censo 2017 para completar la comparación histórica de largo plazo.",
        caption: "Fuente: Elaboración propia con microdatos oficiales del Censo 2017.",
        figures: [
          { number: "24", src: "assets/figures/censo/figura_24_piramide_migrante_2017.png", title: "Pirámide migrante 2017", meta: "Estructura por sexo y edad de la población migrante en 2017." },
          { number: "25", src: "assets/figures/censo/figura_25_escolaridad_25_50_2017.png", title: "Escolaridad 25-50 en 2017", meta: "Promedio de años de estudio." },
          { number: "26", src: "assets/figures/censo/figura_26_educacion_superior_2017.png", title: "Educación superior en 2017", meta: "Personas de 25 a 50 años con educación superior." }
        ]
      }
    ]
  },
  mineduc: {
    id: "mineduc",
    label: "MINEDUC",
    title: "Ministerio de Educación",
    summary: "Matrícula escolar y educación parvularia migrante a partir de registros administrativos y datos vía Transparencia.",
    href: "fuentes/mineduc.html",
    groups: [
      {
        id: "evolucion-nacional",
        label: "Evolución nacional",
        title: "Evolución nacional",
        description: "Primero, una lectura del crecimiento de la matrícula migrante y su distribución entre dependencias y niveles educativos.",
        caption: "Fuente: Elaboración propia con datos de matrícula por estudiante del MINEDUC.",
        figures: [
          { number: "1", src: "assets/figures/mineduc/figura_01_evolucion_matricula_migrante_2016_2025.png", title: "Evolución de la matrícula migrante en Chile, 2016-2025", meta: "Número de estudiantes migrantes y porcentaje sobre la matrícula total escolar." },
          { number: "2", src: "assets/figures/mineduc/figura_02_matricula_migrante_dependencia_2016_2025.png", title: "Matrícula migrante por dependencia administrativa, 2016-2025", meta: "Número y participación de estudiantes migrantes según dependencia del establecimiento." },
          { number: "3", src: "assets/figures/mineduc/figura_03_matricula_migrante_niveles_2016_2025.png", title: "Matrícula migrante por nivel educativo, 2016-2025", meta: "Evolución del número y porcentaje de estudiantes migrantes por nivel educativo." }
        ]
      },
      {
        id: "distribucion-territorial",
        label: "Distribución territorial",
        title: "Distribución territorial",
        description: "Luego, la localización regional, comunal y escolar de la matrícula migrante en el sistema educativo.",
        caption: "Fuente: Elaboración propia con datos de matrícula por estudiante del MINEDUC.",
        figures: [
          { number: "4", src: "assets/figures/mineduc/figura_04_porcentaje_matricula_migrante_region_2025.png", title: "Porcentaje de matrícula migrante por región, 2025", meta: "Peso de la matrícula migrante sobre la matrícula total regional." },
          { number: "5", src: "assets/figures/mineduc/figura_05_comunas_mayor_matricula_migrante_2025.png", title: "Comunas con mayor matrícula migrante, 2025", meta: "Ranking comunal según número absoluto de estudiantes migrantes." },
          { number: "6", src: "assets/figures/mineduc/figura_06_concentracion_escolar_migrante_2025.png", title: "Concentración escolar de estudiantes migrantes, 2025", meta: "Distribución de establecimientos según porcentaje de matrícula migrante." }
        ]
      },
      {
        id: "perfil-estudiantes",
        label: "Perfil de estudiantes",
        title: "Perfil de estudiantes",
        description: "Después, composición por nacionalidad y estructura educativa de los estudiantes migrantes dentro del sistema escolar.",
        caption: "Fuente: Elaboración propia con datos de matrícula por estudiante del MINEDUC.",
        figures: [
          { number: "7", src: "assets/figures/mineduc/figura_07_principales_paises_2025.png", title: "Principales países de origen de estudiantes migrantes, 2025", meta: "Ranking de países de origen de la matrícula migrante en el último año disponible." },
          { number: "8", src: "assets/figures/mineduc/figura_08_composicion_nacionalidad_2016_2025.png", title: "Distribución de estudiantes migrantes por nacionalidad, 2016 y 2025", meta: "Comparación entre el primer y el último año disponible." },
          { number: "9", src: "assets/figures/mineduc/figura_09_piramide_educativa_2025.png", title: "Pirámide educativa por sexo y condición migratoria, 2025", meta: "Comparación de la estructura por curso y sexo entre estudiantes migrantes y nacionales." }
        ]
      },
      {
        id: "educacion-parvularia",
        label: "Educación parvularia",
        title: "Educación parvularia (JUNJI)",
        description: "La sección cierra con primera infancia: crecimiento, evolución y composición territorial y nacional de la matrícula migrante en JUNJI.",
        figures: [
          { number: "10", src: "assets/figures/mineduc/figura_10_junji_crecimiento_matricula_migrante_2011_2025.png", title: "Crecimiento de la matrícula migrante en JUNJI, 2011 y 2025", meta: "Porcentaje de párvulos migrantes sobre la matrícula total y composición por nacionalidad en ambos años.", caption: "Fuente: Elaboración propia con datos JUNJI obtenidos vía Transparencia." },
          { number: "11", src: "assets/figures/mineduc/figura_11_junji_evolucion_matricula_migrante_2011_2025.png", title: "Evolución de la matrícula migrante JUNJI, 2011-2025", meta: "Número de párvulos migrantes y porcentaje sobre la matrícula total observada en la base.", caption: "Fuente: Elaboración propia con datos JUNJI obtenidos vía Transparencia." },
          { number: "12", src: "assets/figures/mineduc/figura_12_junji_porcentaje_migrante_region_2025.png", title: "Porcentaje de matrícula migrante JUNJI por región, 2025", meta: "Comparación territorial del peso de la matrícula migrante dentro de la matrícula parvularia observada por región.", caption: "Fuente: Elaboración propia con datos JUNJI obtenidos vía Transparencia." },
          { number: "13", src: "assets/figures/mineduc/figura_13_junji_principales_nacionalidades_2025.png", title: "Principales nacionalidades migrantes en JUNJI, 2025", meta: "Ranking de nacionalidades migrantes observadas en la matrícula parvularia del último año disponible.", caption: "Fuente: Elaboración propia con datos JUNJI obtenidos vía Transparencia." },
          { number: "14", src: "assets/figures/mineduc/figura_14_junji_distribucion_migrante_nivel_2025.png", title: "Distribución de la matrícula migrante JUNJI por nivel, 2025", meta: "Composición de la matrícula migrante según grandes grupos de nivel parvulario.", caption: "Fuente: Elaboración propia con datos JUNJI obtenidos vía Transparencia." }
        ]
      }
    ]
  },
  ene: {
    id: "ene",
    label: "ENE",
    title: "Encuesta Nacional de Empleo",
    summary: "Inserción laboral, participación y acceso a derechos laborales de población migrante y chilena.",
    href: "fuentes/ene.html",
    groups: [
      {
        id: "panorama-laboral",
        label: "Panorama laboral",
        title: "Panorama laboral",
        description: "Una apertura con participación, ocupación y formalidad para describir la inserción laboral general de la población migrante.",
        caption: "Fuente: Elaboración propia con bases anuales armonizadas de la ENE.",
        figures: [
          { number: "1", src: "assets/figures/ene/figura_01_participacion_laboral_2012_2025.png", title: "Participación laboral migrante y chilena", meta: "Evolución anual de la tasa de participación laboral de migrantes y chilenos." },
          { number: "2", src: "assets/figures/ene/figura_02_tasa_ocupacion_2012_2025.png", title: "Tasa de ocupación migrante y chilena", meta: "Personas ocupadas sobre la población de 15 años y más." },
          { number: "3", src: "assets/figures/ene/figura_03_ocupacion_formal_informal_2025.png", title: "Ocupación formal e informal 2025", meta: "Comparación del último año disponible entre población migrante y chilena." }
        ]
      },
      {
        id: "proteccion-social",
        label: "Protección social",
        title: "Protección social",
        description: "Indicadores recientes de cotización y cobertura para observar acceso a protección laboral y seguridad social.",
        caption: "Fuente: Elaboración propia con bases anuales armonizadas de la ENE.",
        figures: [
          { number: "4", src: "assets/figures/ene/figura_04_cotizacion_previsional_2025.png", title: "Cotización previsional 2025", meta: "Comparación entre población migrante y chilena." },
          { number: "5", src: "assets/figures/ene/figura_05_cotizacion_salud_2025.png", title: "Cotización de salud 2025", meta: "Comparación del último año disponible entre población migrante y chilena." },
          { number: "6", src: "assets/figures/ene/figura_06_seguro_desempleo_2025.png", title: "Seguro de desempleo 2025", meta: "Cobertura del seguro de desempleo entre personas ocupadas en el último año disponible." }
        ]
      },
      {
        id: "conciliacion",
        label: "Conciliación trabajo-familia",
        title: "Conciliación trabajo-familia",
        description: "Condiciones recientes de vacaciones, enfermedad, maternidad y acceso a guardería entre personas ocupadas.",
        caption: "Fuente: Elaboración propia con bases anuales armonizadas de la ENE.",
        figures: [
          { number: "7", src: "assets/figures/ene/figura_07_vacaciones_2025.png", title: "Vacaciones 2025", meta: "Acceso a vacaciones pagadas en el último año disponible." },
          { number: "8", src: "assets/figures/ene/figura_08_dias_pagados_enfermedad_2025.png", title: "Días pagados por enfermedad 2025", meta: "Acceso a días pagados por enfermedad entre personas ocupadas." },
          { number: "9", src: "assets/figures/ene/figura_09_permiso_maternidad_2025.png", title: "Permiso de maternidad 2025", meta: "Mujeres ocupadas con respuesta válida." },
          { number: "10", src: "assets/figures/ene/figura_10_guarderia_2025.png", title: "Guardería o sala cuna 2025", meta: "Mujeres ocupadas con respuesta válida en el último año disponible." }
        ]
      },
      {
        id: "perfil-ocupada",
        label: "Perfil de la población ocupada",
        title: "Perfil de la población ocupada",
        description: "Composición general de la población migrante, estructura etaria, sector económico y presencia territorial en la encuesta.",
        caption: "Fuente: Elaboración propia con bases anuales armonizadas de la ENE.",
        figures: [
          { number: "11", src: "assets/figures/ene/figura_11_share_poblacion_migrante_2012_2025.png", title: "Participación de la población migrante", meta: "Evolución del peso de la población migrante en la población total." },
          { number: "12", src: "assets/figures/ene/figura_12_stock_poblacion_2012_2025.png", title: "Stock estimado de población", meta: "Comparación del stock estimado de migrantes y chilenos en la serie larga." },
          { number: "13", src: "assets/figures/ene/figura_13_estructura_etaria_2012_2025.png", title: "Estructura etaria 2012 y 2025", meta: "Comparación entre años extremos." },
          { number: "14", src: "assets/figures/ene/figura_14_sectores_economicos_migrantes_2025.png", title: "Distribución de ocupados migrantes por sector agregado 2025", meta: "Distribución entre sector primario, secundario y terciario." },
          { number: "15", src: "assets/figures/ene/figura_15_share_migrantes_region_2025.png", title: "Participación migrante por región 2025", meta: "Distribución regional del último año disponible, en orden norte-sur." },
          { number: "16", src: "assets/figures/ene/figura_16_cambio_region_2012_2025.png", title: "Cambio regional 2012-2025", meta: "Comparación territorial del cambio entre 2012 y 2025." }
        ]
      },
      {
        id: "evolucion-reciente",
        label: "Evolución reciente",
        title: "Evolución reciente",
        description: "Finalmente, la trayectoria 2018-2025 de formalidad, cotizaciones y derechos laborales comparables entre población migrante y chilena.",
        caption: "Fuente: Elaboración propia con bases anuales armonizadas de la ENE.",
        figures: [
          { number: "17", src: "assets/figures/ene/figura_17_ocupacion_formal_2018_2025.png", title: "Ocupación formal 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "18", src: "assets/figures/ene/figura_18_cotizacion_previsional_2018_2025.png", title: "Cotización previsional 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "19", src: "assets/figures/ene/figura_19_cotizacion_salud_2018_2025.png", title: "Cotización de salud 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "20", src: "assets/figures/ene/figura_20_seguro_desempleo_2018_2025.png", title: "Seguro de desempleo 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "21", src: "assets/figures/ene/figura_21_vacaciones_2018_2025.png", title: "Vacaciones 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "22", src: "assets/figures/ene/figura_22_dias_pagados_enfermedad_2018_2025.png", title: "Días pagados por enfermedad 2018-2025", meta: "Evolución anual del indicador entre población migrante y chilena." },
          { number: "23", src: "assets/figures/ene/figura_23_permiso_maternidad_2018_2025.png", title: "Permiso de maternidad 2018-2025", meta: "Evolución anual del indicador para mujeres ocupadas con respuesta válida." },
          { number: "24", src: "assets/figures/ene/figura_24_guarderia_2018_2025.png", title: "Guardería o sala cuna 2018-2025", meta: "Mujeres ocupadas con respuesta válida entre 2018 y 2025." },
          { number: "25", src: "assets/figures/ene/figura_25_brecha_indicadores_2025.png", title: "Brecha de indicadores en 2025", meta: "Síntesis de diferencias entre migrantes y chilenos en el último año disponible." },
          { number: "26", src: "assets/figures/ene/figura_26_cambio_indicadores_2018_2025.png", title: "Cambio de indicadores 2018-2025", meta: "Síntesis de la evolución de los principales indicadores laborales entre 2018 y 2025." }
        ]
      }
    ]
  },
  epf: {
    id: "epf",
    label: "EPF",
    title: "Encuesta de Presupuestos Familiares",
    summary: "Estructura del gasto y condiciones habitacionales de los hogares según tipo de jefatura.",
    href: "fuentes/epf.html",
    groups: [
      {
        id: "estructura-general",
        label: "Estructura general del gasto",
        title: "Estructura general del gasto",
        description: "Primero, la composición del presupuesto y el peso del gasto total sobre el ingreso disponible de los hogares.",
        caption: "Fuente: Elaboración propia con datos de la IX EPF.",
        figures: [
          { number: "1", src: "assets/figures/epf/figura_01_composicion_gasto_categoria_2022.png", title: "Composición del gasto por gran categoría", meta: "Composición del gasto de los hogares según tipo de jefatura." },
          { number: "2", src: "assets/figures/epf/figura_02_ratio_gasto_ingreso_2022.png", title: "Gasto total como proporción del ingreso disponible", meta: "Presión presupuestaria media por tipo de jefatura." }
        ]
      },
      {
        id: "brechas-consumo",
        label: "Brechas de consumo",
        title: "Brechas de consumo",
        description: "Luego, las principales diferencias en la composición del gasto entre hogares con jefatura migrante y chilena.",
        caption: "Fuente: Elaboración propia con datos de la IX EPF.",
        figures: [
          { number: "3", src: "assets/figures/epf/figura_03_brecha_gasto_categoria_2022.png", title: "Brecha de gasto por categoría", meta: "Diferencia en el peso presupuestario de cada categoría entre jefaturas migrantes y chilenas." },
          { number: "4", src: "assets/figures/epf/figura_04_peso_alimentacion_2022.png", title: "Peso del gasto en alimentación", meta: "Participación del gasto en alimentos y bebidas no alcohólicas." },
          { number: "5", src: "assets/figures/epf/figura_05_peso_transporte_2022.png", title: "Peso del gasto en transporte", meta: "Participación del gasto en transporte dentro del presupuesto." }
        ]
      },
      {
        id: "presion-presupuestaria",
        label: "Presión presupuestaria",
        title: "Presión presupuestaria",
        description: "Después, la proporción de hogares cuyo gasto supera su ingreso disponible como síntesis de presión económica.",
        caption: "Fuente: Elaboración propia con datos de la IX EPF.",
        figures: [
          { number: "6", src: "assets/figures/epf/figura_06_hogares_sobregasto_2022.png", title: "Hogares con gasto mayor que ingreso disponible", meta: "Proporción de hogares cuyo gasto supera el ingreso disponible." }
        ]
      },
      {
        id: "vivienda",
        label: "Vivienda",
        title: "Vivienda",
        description: "Luego, una lectura específica del gasto habitacional, la tenencia de la vivienda y la carga por modalidad de tenencia.",
        caption: "Fuente: Elaboración propia con datos de la IX EPF.",
        figures: [
          { number: "7", src: "assets/figures/epf/figura_07_peso_vivienda_2022.png", title: "Peso del gasto en vivienda", meta: "Proporción del presupuesto destinada a vivienda." },
          { number: "8", src: "assets/figures/epf/figura_08_tenencia_vivienda_2022.png", title: "Tenencia de la vivienda por tipo de jefatura", meta: "Distribución de los hogares según modalidad de tenencia de la vivienda principal." },
          { number: "9", src: "assets/figures/epf/figura_09_carga_vivienda_tenencia_2022.png", title: "Carga del gasto en vivienda según tenencia", meta: "Peso del gasto habitacional por jefatura y modalidad de tenencia." }
        ]
      },
      {
        id: "detalle-gasto",
        label: "Detalle del gasto",
        title: "Detalle del gasto",
        description: "La sección cierra con subcategorías específicas del gasto migrante y una comparación agregada entre la VIII y la IX EPF.",
        figures: [
          { number: "10", src: "assets/figures/epf/figura_10_top_subcategorias_migrantes_2022.png", title: "Principales subcategorías de gasto en hogares con jefatura migrante", meta: "Subcategorías con mayor peso dentro del presupuesto migrante.", caption: "Fuente: Elaboración propia con datos de la IX EPF." },
          { number: "11", src: "assets/figures/epf/figura_11_composicion_total_hogares_2017_2022.png", title: "Composición total del gasto de hogares, 2017 y 2022", meta: "Comparación agregada entre VIII EPF e IX EPF.", caption: "Fuente: Elaboración propia con datos de la VIII y la IX EPF." }
        ]
      }
    ]
  }
};
