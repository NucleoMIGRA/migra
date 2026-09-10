window.dataMigraFigureCatalog = {
  casen: {
    id: "casen",
    label: "CASEN",
    title: "CASEN",
    summary: "Indicators on living conditions, territory, and socioeconomic gaps between migrant and Chilean populations.",
    href: "sources/casen.html",
    groups: [
      {
        id: "serie-completa",
        label: "Full time series",
        title: "Full time series",
        description: "Changes over time in key demographic, education, and labor indicators that are comparable across CASEN rounds.",
        caption: "Source: Authors' calculations using CASEN data.",
        figures: [
          { number: "1", src: "assets/figures/casen/figura_01_stock_migrantes.png", title: "Migrant population stock", meta: "Trend in the migrant share of the total population." },
          { number: "2", src: "assets/figures/casen/figura_02_participacion_laboral.png", title: "Labor-force participation", meta: "Comparison of labor-force participation between migrant and Chilean populations." },
          { number: "3", src: "assets/figures/casen/figura_03_tasa_desocupacion.png", title: "Unemployment rate", meta: "Comparison of unemployment among migrant and Chilean labor-force participants." },
          { number: "4", src: "assets/figures/casen/figura_04_ingreso_laboral_total.png", title: "Average total labor income", meta: "Comparison of average total labor income between migrant and Chilean populations." },
          { number: "5", src: "assets/figures/casen/figura_05_horas.png", title: "Usual hours worked", meta: "Average weekly hours worked by migration status." },
          { number: "6", src: "assets/figures/casen/figura_06_contrato.png", title: "Employment contract status", meta: "Share of employed people with an employment contract." },
          { number: "7", src: "assets/figures/casen/figura_07_salario_hora.png", title: "Hourly earnings", meta: "Comparison of average hourly earnings between migrant and Chilean workers." },
          { number: "8", src: "assets/figures/casen/figura_08_escolaridad.png", title: "Average years of schooling", meta: "Average years of schooling among people aged 25 to 50." },
          { number: "9", src: "assets/figures/casen/figura_09_pobreza_multi.png", title: "Multidimensional poverty", meta: "Incidence of multidimensional poverty by migration status." }
        ]
      },
      {
        id: "casen-2024",
        label: "CASEN 2024",
        title: "Latest available year",
        description: "A recent profile of the migrant population in the 2024 survey, covering territorial distribution, housing gaps, and socioeconomic characteristics.",
        figures: [
          { number: "10", src: "assets/figures/casen/figura_10_migrantes_region.png", title: "Migrant population by region", meta: "Regional distribution of the migrant population in the latest available year.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "11", src: "assets/figures/casen/figura_11_mapa_comunal_migrantes.png", title: "Municipal map of the migrant population", meta: "Municipal distribution of the migrant population in the latest available year.", caption: "Source: Authors' calculations using the harmonized 2024 CASEN data.", cardClass: "figure-card-map" },
          { number: "12", src: "assets/figures/casen/figura_12_hacinamiento.png", title: "Distribution by overcrowding level", meta: "Comparison of housing conditions between migrant and Chilean populations.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "13", src: "assets/figures/casen/figura_13_rural.png", title: "Urban-rural distribution", meta: "Share of the population living in rural areas.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "14", src: "assets/figures/casen/figura_14_migrantes_quintil.png", title: "Distribution by income quintile", meta: "Migrant population by income quintile.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "15", src: "assets/figures/casen/figura_15_educ_sup_25_50.png", title: "Higher education among people aged 25 to 50", meta: "Comparison between migrant and Chilean populations in prime working ages.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "16", src: "assets/figures/casen/figura_16_piramide_migrantes_2024.png", title: "Migrant population pyramid", meta: "Age and sex structure of the migrant population in the latest available year.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "17", src: "assets/figures/casen/figura_17_piramide_nativos_2024.png", title: "Chilean population pyramid", meta: "Age and sex structure of the Chilean population in the latest available year.", caption: "Source: Authors' calculations using CASEN data." },
          { number: "18", src: "assets/figures/casen/figura_18_perfil_socioeconomico_2024.png", title: "Comparative profile of socioeconomic integration", meta: "Higher education, labor-force participation, and employment contracts among migrant and Chilean workers.", caption: "Source: Authors' calculations using the harmonized 2024 CASEN data." },
          { number: "19", src: "assets/figures/casen/figura_19_condiciones_vida_2024.png", title: "Living conditions and territory", meta: "Gaps in multidimensional poverty, overcrowding, and rural residence.", caption: "Source: Authors' calculations using the harmonized 2024 CASEN data." },
          { number: "20", src: "assets/figures/casen/figura_20_regiones_migrantes_2024.png", title: "Regions with the largest migrant populations", meta: "Estimated number of migrants and share of the regional population.", caption: "Source: Authors' calculations using the harmonized 2024 CASEN data." },
          { number: "21", src: "assets/figures/casen/figura_21_piramide_migrantes_2024.png", title: "Sex and age structure of the migrant population", meta: "Population pyramid of the migrant population using survey weights.", caption: "Source: Authors' calculations using the harmonized 2024 CASEN data." }
        ]
      }
    ]
  },
  snm: {
    id: "snm",
    label: "SNM",
    title: "National Migration Service",
    summary: "Administrative records on residence permits, application outcomes, and activity profiles.",
    href: "sources/snm.html",
    groups: [
      {
        id: "residencias-temporales",
        label: "Temporary residence permits",
        title: "Temporary residence permits",
        description: "Applications, decisions, and recent profiles of temporary residence permits in the current administrative cycle.",
        caption: "Source: Authors' calculations using National Migration Service data.",
        figures: [
          { number: "1", src: "assets/figures/snm/figura_01_rt_solicitudes.png", title: "Temporary residence applications", meta: "Trend in temporary residence applications." },
          { number: "2", src: "assets/figures/snm/figura_02_rt_aprobadas.png", title: "Approved temporary residence permits", meta: "Annual trend in approved temporary residence permits." },
          { number: "3", src: "assets/figures/snm/figura_03_rt_resueltas_resultado.png", title: "Temporary residence decisions by outcome", meta: "Outcomes of resolved temporary residence applications." },
          { number: "4", src: "assets/figures/snm/figura_04_origen_solicitud_rt.png", title: "Temporary residence application channel", meta: "Distribution by temporary residence application channel." },
          { number: "5", src: "assets/figures/snm/figura_05_rt_beneficios_2025.png", title: "Main temporary residence categories", meta: "Distribution of the main permit categories granted under temporary residence." },
          { number: "6", src: "assets/figures/snm/figura_06_rt_nacionalidades_2025.png", title: "Main nationalities in temporary residence permits", meta: "Ranking of nationalities among approved temporary residence permits in the latest available year." },
          { number: "7", src: "assets/figures/snm/figura_07_rt_actividad_distribucion.png", title: "Main activity among approved temporary residents", meta: "Percentage distribution of activities among approved temporary residence permits." }
        ]
      },
      {
        id: "residencias-definitivas",
        label: "Permanent residence permits",
        title: "Permanent residence permits",
        description: "Outcomes, composition, and territorial distribution of permanent residence within regular migration procedures.",
        caption: "Source: Authors' calculations using National Migration Service data.",
        figures: [
          { number: "8", src: "assets/figures/snm/figura_08_rd_solicitudes.png", title: "Permanent residence applications", meta: "Trend in permanent residence applications." },
          { number: "9", src: "assets/figures/snm/figura_09_rd_aprobadas.png", title: "Approved permanent residence permits", meta: "Annual trend in approved permanent residence permits." },
          { number: "10", src: "assets/figures/snm/figura_10_rd_resueltas_resultado.png", title: "Permanent residence decisions by outcome", meta: "Granted, rejected, and closed permanent residence applications." },
          { number: "11", src: "assets/figures/snm/figura_11_rd_actividad_distribucion.png", title: "Main activity among approved permanent residents", meta: "Percentage distribution of activities among people granted permanent residence." },
          { number: "12", src: "assets/figures/snm/figura_12_rd_regiones_2025.png", title: "Approved permanent residence permits by region", meta: "Regional distribution in the latest available year, from north to south." },
          { number: "13", src: "assets/figures/snm/figura_13_sexo_residencias_favorables_2025.png", title: "Sex composition of favorable residence decisions", meta: "Sex composition of favorable decisions." },
          { number: "14", src: "assets/figures/snm/figura_14_tasa_aprobacion.png", title: "Approval rate", meta: "Approval rates by residence permit type." }
        ]
      },
      {
        id: "otros-procesos",
        label: "Other procedures",
        title: "Asylum and other procedures",
        description: "Additional evidence on asylum applications and decisions in recent migration administration.",
        caption: "Source: Authors' calculations using National Migration Service data.",
        figures: [
          { number: "15", src: "assets/figures/snm/figura_15_refugio_series.png", title: "Asylum series", meta: "Asylum applications and outcomes." },
          { number: "16", src: "assets/figures/snm/figura_16_refugio_nacionalidades_2025.png", title: "Main nationalities in asylum decisions", meta: "Asylum decisions by nationality in the latest available year." }
        ]
      }
    ]
  },
  epe: {
    id: "epe",
    label: "EPE / INE-SNM",
    title: "Official Estimate of the Foreign Resident Population",
    summary: "Size, sex composition, and an approximation of the irregular component in the official estimate.",
    href: "sources/epe_ine.html",
    groups: [
      {
        id: "evolucion-stock",
        label: "Population stock trends",
        title: "Population stock trends",
        description: "Trends in the estimated foreign population and changes in its composition by sex and nationality.",
        caption: "Source: Authors' calculations using INE-SNM data.",
        figures: [
          { number: "1", src: "assets/figures/epe_ine_snm/figura_01_stock_nacional.png", title: "Estimated foreign population in Chile", meta: "Annual trend in the total estimated population." },
          { number: "2", src: "assets/figures/epe_ine_snm/figura_02_stock_por_sexo.png", title: "Estimated foreign population by sex", meta: "Annual series by sex." },
          { number: "3", src: "assets/figures/epe_ine_snm/figura_03_principales_nacionalidades_2023.png", title: "Main nationalities", meta: "Relative shares of the main countries of origin." },
          { number: "4", src: "assets/figures/epe_ine_snm/figura_04_series_principales_paises.png", title: "Trends for the main countries of origin", meta: "Trends for the main nationalities." }
        ]
      },
      {
        id: "distribucion-territorial",
        label: "Territorial distribution",
        title: "Territorial distribution",
        description: "Regional and municipal concentration of the estimated foreign population, from its overall distribution to specific municipalities.",
        caption: "Source: Authors' calculations using INE-SNM data.",
        figures: [
          { number: "5", src: "assets/figures/epe_ine_snm/figura_05_distribucion_regional_2023.png", title: "Regional distribution, 2023", meta: "Regional distribution of the foreign population from north to south." },
          { number: "6", src: "assets/figures/epe_ine_snm/figura_06_cambio_regional.png", title: "Cumulative regional change", meta: "Absolute change between the first and latest available years." },
          { number: "7", src: "assets/figures/epe_ine_snm/figura_07_top_comunas_2023.png", title: "Municipalities with the largest estimated foreign populations", meta: "Municipal ranking by estimated number of foreign residents." },
          { number: "8", src: "assets/figures/epe_ine_snm/figura_08_concentracion_comunal_2023.png", title: "Municipal concentration of the estimated population", meta: "Additional territorial summary of the estimated population." }
        ]
      },
      {
        id: "perfil-demografico",
        label: "Demographic profile",
        title: "Demographic profile",
        description: "Sex and age structure of the estimated foreign population and the relative share of children and adolescents.",
        caption: "Source: Authors' calculations using INE-SNM data.",
        figures: [
          { number: "9", src: "assets/figures/epe_ine_snm/figura_09_edad_sexo_2023.png", title: "Sex and age structure", meta: "Population pyramid of the estimated foreign population in the latest available year." },
          { number: "10", src: "assets/figures/epe_ine_snm/figura_10_nna_por_pais_2023.png", title: "Children and adolescents by nationality", meta: "Share of people aged 0 to 19 within each nationality." }
        ]
      },
      {
        id: "componente-irregular",
        label: "Irregular component",
        title: "Irregular component",
        description: "The final section examines the irregular component of the estimated population, first by nationality and then by territory.",
        caption: "Source: Authors' calculations using INE-SNM data.",
        figures: [
          { number: "11", src: "assets/figures/epe_ine_snm/figura_11_irregular_pais_2023.png", title: "Irregular component by country", meta: "Relative weight of the irregular component by nationality in the available estimate." },
          { number: "12", src: "assets/figures/epe_ine_snm/figura_12_irregular_region_2023.png", title: "Irregular component by region", meta: "Share and number of people in an irregular situation in regions with available estimates." }
        ]
      }
    ]
  },
  censo: {
    id: "censo",
    label: "Census",
    title: "Census",
    summary: "Census comparisons and the demographic structure of the population born outside Chile.",
    href: "sources/census.html",
    groups: [
      {
        id: "tamano-territorio",
        label: "Population size and territorial distribution",
        title: "Population size and territorial distribution",
        description: "The section begins with the size of the population born outside Chile and its distribution across regions and municipalities.",
        caption: "Source: Authors' calculations using official 2017 and 2024 Census microdata.",
        figures: [
          { number: "1", src: "assets/figures/censo/figura_01_region_migrantes_2017_2024.png", title: "Population born outside Chile by region", meta: "Comparison of the population born outside Chile by region across both censuses." },
          { number: "2", src: "assets/figures/censo/figura_02_share_migrantes_region_2017_2024.png", title: "Regional share of the population born outside Chile", meta: "Population born outside Chile as a share of each region's population in 2017 and 2024." },
          { number: "3", src: "assets/figures/censo/figura_03_cambio_share_region_2017_2024.png", title: "Change in the migrant share by region", meta: "Change between 2017 and 2024 in the share of each region's population born outside Chile." },
          { number: "4", src: "assets/figures/censo/figura_04_region_migrantes_2024.png", title: "Migrant population by region, 2024", meta: "Regional distribution of the population born outside Chile in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "5", src: "assets/figures/censo/figura_05_top_comunas_2024.png", title: "Municipalities with the largest migrant populations, 2024", meta: "Municipal ranking by number of migrants in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." }
        ]
      },
      {
        id: "perfil-demografico",
        label: "Demographic profile",
        title: "Demographic profile",
        description: "It then examines sex, age, and period of arrival to describe the recent composition of the migrant population.",
        figures: [
          { number: "6", src: "assets/figures/censo/figura_06_piramide_migrante_2024.png", title: "Migrant population pyramid, 2024", meta: "Sex and age structure of the population born outside Chile in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "7", src: "assets/figures/censo/figura_07_sexo_migrantes_2024.png", title: "Sex composition of the migrant population, 2024", meta: "Sex composition of the population born outside Chile in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "8", src: "assets/figures/censo/figura_08_estructura_etaria_migrante_2024.png", title: "Age structure, 2024", meta: "Broad age groups of the population born outside Chile in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "9", src: "assets/figures/censo/figura_09_periodo_llegada_2024.png", title: "Period of arrival in Chile", meta: "Arrival cohorts observed in 2024.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "10", src: "assets/figures/censo/figura_10_sexo_migrantes_2017_2024.png", title: "Sex composition of the migrant population", meta: "Comparison between 2017 and 2024." },
          { number: "11", src: "assets/figures/censo/figura_11_estructura_etaria_migrante_2017_2024.png", title: "Age structure of the migrant population", meta: "Comparison between 2017 and 2024." }
        ]
      },
      {
        id: "capital-humano-hogares",
        label: "Human capital and households",
        title: "Human capital and households",
        description: "Education, households, and family ties provide evidence on gaps and the social composition of the migrant population.",
        figures: [
          { number: "12", src: "assets/figures/censo/figura_12_escolaridad_promedio_25_50.png", title: "Average years of schooling, ages 25-50", meta: "Comparison by place of birth." },
          { number: "13", src: "assets/figures/censo/figura_13_educacion_superior_25_50.png", title: "Higher education, ages 25-50", meta: "Comparison by place of birth." },
          { number: "14", src: "assets/figures/censo/figura_14_escolaridad_25_50_2024.png", title: "Years of schooling among ages 25-50, 2024", meta: "Average years of schooling.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "15", src: "assets/figures/censo/figura_15_educacion_superior_2024.png", title: "Higher education, 2024", meta: "People aged 25 to 50 with higher education.", caption: "Source: Authors' calculations using official 2024 Census microdata." },
          { number: "16", src: "assets/figures/censo/figura_16_hogares_con_migrantes.png", title: "Households with at least one migrant member", meta: "Change between 2017 and 2024." },
          { number: "17", src: "assets/figures/censo/figura_17_jefatura_hogar_migrante.png", title: "Migrant-headed households", meta: "Change between 2017 and 2024." },
          { number: "18", src: "assets/figures/censo/figura_18_hijos_promedio_mujeres_18_50.png", title: "Average number of children among women aged 18 to 50", meta: "Comparison by place of birth." },
          { number: "19", src: "assets/figures/censo/figura_19_hijo_nacido_en_chile_2017.png", title: "Women with a child born in Chile", meta: "Observed share among migrant women in the 2017 Census.", caption: "Source: Authors' calculations using official 2017 Census microdata." },
          { number: "20", src: "assets/figures/censo/figura_20_urbano_rural_2017_2024.png", title: "Urban-rural distribution", meta: "Comparison by place of birth." }
        ]
      },
      {
        id: "paises-nacimiento",
        label: "Countries of birth",
        title: "Countries of birth",
        description: "The section then presents the countries of birth of the population born outside Chile in both censuses and in each census snapshot.",
        figures: [
          { number: "21", src: "assets/figures/censo/figura_21_principales_paises_nacimiento.png", title: "Main countries of birth", meta: "Comparison between 2017 and 2024." },
          { number: "22", src: "assets/figures/censo/figura_22_principales_paises_2017.png", title: "Main countries of birth, 2017", meta: "Countries of birth in the 2017 Census.", caption: "Source: Authors' calculations using official 2017 Census microdata." },
          { number: "23", src: "assets/figures/censo/figura_23_principales_paises_2024.png", title: "Main countries of birth, 2024", meta: "Countries of birth in the 2024 Census.", caption: "Source: Authors' calculations using official 2024 Census microdata." }
        ]
      },
      {
        id: "comparaciones-historicas",
        label: "Historical comparisons",
        title: "Historical comparisons",
        description: "The section closes with figures specific to the 2017 Census, completing the longer-term historical comparison.",
        caption: "Source: Authors' calculations using official 2017 Census microdata.",
        figures: [
          { number: "24", src: "assets/figures/censo/figura_24_piramide_migrante_2017.png", title: "Migrant population pyramid, 2017", meta: "Sex and age structure of the migrant population in 2017." },
          { number: "25", src: "assets/figures/censo/figura_25_escolaridad_25_50_2017.png", title: "Years of schooling among ages 25-50, 2017", meta: "Average years of schooling." },
          { number: "26", src: "assets/figures/censo/figura_26_educacion_superior_2017.png", title: "Higher education, 2017", meta: "People aged 25 to 50 with higher education." }
        ]
      }
    ]
  },
  mineduc: {
    id: "mineduc",
    label: "MINEDUC",
    title: "Ministry of Education (MINEDUC)",
    summary: "Migrant school enrollment and early-childhood education based on administrative records obtained through Transparency requests.",
    href: "sources/mineduc.html",
    groups: [
      {
        id: "evolucion-nacional",
        label: "National trends",
        title: "National trends",
        description: "The section begins with growth in migrant enrollment and its distribution across school administration types and education levels.",
        caption: "Source: Authors' calculations using student-level MINEDUC enrollment data.",
        figures: [
          { number: "1", src: "assets/figures/mineduc/figura_01_evolucion_matricula_migrante_2016_2025.png", title: "Migrant enrollment in Chile, 2016-2025", meta: "Number of migrant students and their share of total school enrollment." },
          { number: "2", src: "assets/figures/mineduc/figura_02_matricula_migrante_dependencia_2016_2025.png", title: "Migrant enrollment by school administration type, 2016-2025", meta: "Number and share of migrant students by school administration type." },
          { number: "3", src: "assets/figures/mineduc/figura_03_matricula_migrante_niveles_2016_2025.png", title: "Migrant enrollment by education level, 2016-2025", meta: "Trends in the number and share of migrant students by education level." }
        ]
      },
      {
        id: "distribucion-territorial",
        label: "Territorial distribution",
        title: "Territorial distribution",
        description: "It then examines the regional, municipal, and school-level distribution of migrant enrollment.",
        caption: "Source: Authors' calculations using student-level MINEDUC enrollment data.",
        figures: [
          { number: "4", src: "assets/figures/mineduc/figura_04_porcentaje_matricula_migrante_region_2025.png", title: "Migrant share of enrollment by region, 2025", meta: "Migrant students as a share of total regional enrollment." },
          { number: "5", src: "assets/figures/mineduc/figura_05_comunas_mayor_matricula_migrante_2025.png", title: "Municipalities with the largest migrant enrollment, 2025", meta: "Municipal ranking by number of migrant students." },
          { number: "6", src: "assets/figures/mineduc/figura_06_concentracion_escolar_migrante_2025.png", title: "School concentration of migrant students, 2025", meta: "Distribution of schools by migrant share of enrollment." }
        ]
      },
      {
        id: "perfil-estudiantes",
        label: "Student profile",
        title: "Student profile",
        description: "Next, it presents the nationality composition and educational structure of migrant students in the school system.",
        caption: "Source: Authors' calculations using student-level MINEDUC enrollment data.",
        figures: [
          { number: "7", src: "assets/figures/mineduc/figura_07_principales_paises_2025.png", title: "Main countries of origin of migrant students, 2025", meta: "Ranking of countries of origin among migrant students in the latest available year." },
          { number: "8", src: "assets/figures/mineduc/figura_08_composicion_nacionalidad_2016_2025.png", title: "Migrant students by nationality, 2016 and 2025", meta: "Comparison between the first and latest available years." },
          { number: "9", src: "assets/figures/mineduc/figura_09_piramide_educativa_2025.png", title: "Education pyramid by sex and migration status, 2025", meta: "Comparison of grade and sex composition between migrant and Chilean students." }
        ]
      },
      {
        id: "educacion-parvularia",
        label: "Early-childhood education",
        title: "Early-childhood education (JUNJI)",
        description: "The section closes with early childhood: growth, trends, and the territorial and nationality composition of migrant enrollment in JUNJI.",
        figures: [
          { number: "10", src: "assets/figures/mineduc/figura_10_junji_crecimiento_matricula_migrante_2011_2025.png", title: "Growth in migrant enrollment in JUNJI, 2011 and 2025", meta: "Migrant children as a share of total enrollment and nationality composition in both years.", caption: "Source: Authors' calculations using JUNJI data obtained through a Transparency request." },
          { number: "11", src: "assets/figures/mineduc/figura_11_junji_evolucion_matricula_migrante_2011_2025.png", title: "Migrant enrollment in JUNJI, 2011-2025", meta: "Number of migrant children and their share of total enrollment observed in the data.", caption: "Source: Authors' calculations using JUNJI data obtained through a Transparency request." },
          { number: "12", src: "assets/figures/mineduc/figura_12_junji_porcentaje_migrante_region_2025.png", title: "Migrant share of JUNJI enrollment by region, 2025", meta: "Regional comparison of migrant enrollment as a share of observed early-childhood enrollment.", caption: "Source: Authors' calculations using JUNJI data obtained through a Transparency request." },
          { number: "13", src: "assets/figures/mineduc/figura_13_junji_principales_nacionalidades_2025.png", title: "Main migrant nationalities in JUNJI, 2025", meta: "Ranking of migrant nationalities observed in early-childhood enrollment in the latest available year.", caption: "Source: Authors' calculations using JUNJI data obtained through a Transparency request." },
          { number: "14", src: "assets/figures/mineduc/figura_14_junji_distribucion_migrante_nivel_2025.png", title: "Migrant JUNJI enrollment by level, 2025", meta: "Composition of migrant enrollment across broad early-childhood education levels.", caption: "Source: Authors' calculations using JUNJI data obtained through a Transparency request." }
        ]
      }
    ]
  },
  ene: {
    id: "ene",
    label: "ENE",
    title: "National Employment Survey (ENE)",
    summary: "Labor-market integration, participation, and access to employment rights among migrant and Chilean populations.",
    href: "sources/ene.html",
    groups: [
      {
        id: "panorama-laboral",
        label: "Labor-market overview",
        title: "Labor-market overview",
        description: "The section opens with labor-force participation, employment, and formality to describe migrants' overall labor-market integration.",
        caption: "Source: Authors' calculations using harmonized annual ENE data.",
        figures: [
          { number: "1", src: "assets/figures/ene/figura_01_participacion_laboral_2012_2025.png", title: "Labor-force participation among migrant and Chilean populations", meta: "Annual labor-force participation rates for migrant and Chilean populations." },
          { number: "2", src: "assets/figures/ene/figura_02_tasa_ocupacion_2012_2025.png", title: "Employment rate among migrant and Chilean populations", meta: "Employed people as a share of the population aged 15 and over." },
          { number: "3", src: "assets/figures/ene/figura_03_ocupacion_formal_informal_2025.png", title: "Formal and informal employment, 2025", meta: "Comparison between migrant and Chilean populations in the latest available year." }
        ]
      },
      {
        id: "proteccion-social",
        label: "Social protection",
        title: "Social protection",
        description: "Recent contribution and coverage indicators show access to employment protection and social security.",
        caption: "Source: Authors' calculations using harmonized annual ENE data.",
        figures: [
          { number: "4", src: "assets/figures/ene/figura_04_cotizacion_previsional_2025.png", title: "Pension contributions, 2025", meta: "Comparison between migrant and Chilean populations." },
          { number: "5", src: "assets/figures/ene/figura_05_cotizacion_salud_2025.png", title: "Health insurance contributions, 2025", meta: "Comparison between migrant and Chilean populations in the latest available year." },
          { number: "6", src: "assets/figures/ene/figura_06_seguro_desempleo_2025.png", title: "Unemployment insurance, 2025", meta: "Unemployment insurance coverage among employed people in the latest available year." }
        ]
      },
      {
        id: "conciliacion",
        label: "Work-family balance",
        title: "Work-family balance",
        description: "Recent conditions regarding paid leave, sickness, maternity, and childcare among employed people.",
        caption: "Source: Authors' calculations using harmonized annual ENE data.",
        figures: [
          { number: "7", src: "assets/figures/ene/figura_07_vacaciones_2025.png", title: "Paid vacation, 2025", meta: "Access to paid vacation in the latest available year." },
          { number: "8", src: "assets/figures/ene/figura_08_dias_pagados_enfermedad_2025.png", title: "Paid sick leave, 2025", meta: "Access to paid sick leave among employed people." },
          { number: "9", src: "assets/figures/ene/figura_09_permiso_maternidad_2025.png", title: "Maternity leave, 2025", meta: "Employed women with a valid response." },
          { number: "10", src: "assets/figures/ene/figura_10_guarderia_2025.png", title: "Childcare or nursery provision, 2025", meta: "Employed women with a valid response in the latest available year." }
        ]
      },
      {
        id: "perfil-ocupada",
        label: "Profile of the employed population",
        title: "Profile of the employed population",
        description: "Overall composition of the migrant population, age structure, economic sector, and territorial presence in the survey.",
        caption: "Source: Authors' calculations using harmonized annual ENE data.",
        figures: [
          { number: "11", src: "assets/figures/ene/figura_11_share_poblacion_migrante_2012_2025.png", title: "Migrant share of the population", meta: "Trend in the migrant share of the total population." },
          { number: "12", src: "assets/figures/ene/figura_12_stock_poblacion_2012_2025.png", title: "Estimated population stock", meta: "Long-term comparison of the estimated migrant and Chilean populations." },
          { number: "13", src: "assets/figures/ene/figura_13_estructura_etaria_2012_2025.png", title: "Age structure, 2012 and 2025", meta: "Comparison of the first and last years." },
          { number: "14", src: "assets/figures/ene/figura_14_sectores_economicos_migrantes_2025.png", title: "Employed migrants by broad economic sector, 2025", meta: "Distribution across primary, secondary, and tertiary sectors." },
          { number: "15", src: "assets/figures/ene/figura_15_share_migrantes_region_2025.png", title: "Migrant share by region, 2025", meta: "Regional distribution in the latest available year, from north to south." },
          { number: "16", src: "assets/figures/ene/figura_16_cambio_region_2012_2025.png", title: "Regional change, 2012-2025", meta: "Territorial comparison of change between 2012 and 2025." }
        ]
      },
      {
        id: "evolucion-reciente",
        label: "Recent trends",
        title: "Recent trends",
        description: "Finally, trends from 2018 to 2025 in formality, contributions, and comparable employment rights among migrant and Chilean populations.",
        caption: "Source: Authors' calculations using harmonized annual ENE data.",
        figures: [
          { number: "17", src: "assets/figures/ene/figura_17_ocupacion_formal_2018_2025.png", title: "Formal employment, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "18", src: "assets/figures/ene/figura_18_cotizacion_previsional_2018_2025.png", title: "Pension contributions, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "19", src: "assets/figures/ene/figura_19_cotizacion_salud_2018_2025.png", title: "Health insurance contributions, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "20", src: "assets/figures/ene/figura_20_seguro_desempleo_2018_2025.png", title: "Unemployment insurance, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "21", src: "assets/figures/ene/figura_21_vacaciones_2018_2025.png", title: "Paid vacation, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "22", src: "assets/figures/ene/figura_22_dias_pagados_enfermedad_2018_2025.png", title: "Paid sick leave, 2018-2025", meta: "Annual trend for migrant and Chilean populations." },
          { number: "23", src: "assets/figures/ene/figura_23_permiso_maternidad_2018_2025.png", title: "Maternity leave, 2018-2025", meta: "Annual trend among employed women with a valid response." },
          { number: "24", src: "assets/figures/ene/figura_24_guarderia_2018_2025.png", title: "Childcare or nursery provision, 2018-2025", meta: "Employed women with a valid response between 2018 and 2025." },
          { number: "25", src: "assets/figures/ene/figura_25_brecha_indicadores_2025.png", title: "Indicator gaps in 2025", meta: "Summary of gaps between migrant and Chilean populations in the latest available year." },
          { number: "26", src: "assets/figures/ene/figura_26_cambio_indicadores_2018_2025.png", title: "Change in indicators, 2018-2025", meta: "Summary of changes in key labor indicators between 2018 and 2025." }
        ]
      }
    ]
  },
  epf: {
    id: "epf",
    label: "EPF",
    title: "Household Budget Survey (EPF)",
    summary: "Household expenditure patterns and housing conditions by type of household head.",
    href: "sources/epf.html",
    groups: [
      {
        id: "estructura-general",
        label: "Overall expenditure structure",
        title: "Overall expenditure structure",
        description: "The section begins with budget composition and total expenditure as a share of household disposable income.",
        caption: "Source: Authors' calculations using the ninth EPF.",
        figures: [
          { number: "1", src: "assets/figures/epf/figura_01_composicion_gasto_categoria_2022.png", title: "Expenditure composition by major category", meta: "Household expenditure composition by type of household head." },
          { number: "2", src: "assets/figures/epf/figura_02_ratio_gasto_ingreso_2022.png", title: "Total expenditure as a share of disposable income", meta: "Average budget pressure by type of household head." }
        ]
      },
      {
        id: "brechas-consumo",
        label: "Consumption gaps",
        title: "Consumption gaps",
        description: "It then presents key differences in expenditure composition between migrant- and Chilean-headed households.",
        caption: "Source: Authors' calculations using the ninth EPF.",
        figures: [
          { number: "3", src: "assets/figures/epf/figura_03_brecha_gasto_categoria_2022.png", title: "Expenditure gap by category", meta: "Difference in each category's budget share between migrant- and Chilean-headed households." },
          { number: "4", src: "assets/figures/epf/figura_04_peso_alimentacion_2022.png", title: "Share of spending on food", meta: "Share of spending on food and non-alcoholic beverages." },
          { number: "5", src: "assets/figures/epf/figura_05_peso_transporte_2022.png", title: "Share of spending on transport", meta: "Transport expenditure as a share of the household budget." }
        ]
      },
      {
        id: "presion-presupuestaria",
        label: "Budget pressure",
        title: "Budget pressure",
        description: "Next, the share of households whose expenditure exceeds disposable income summarizes budget pressure.",
        caption: "Source: Authors' calculations using the ninth EPF.",
        figures: [
          { number: "6", src: "assets/figures/epf/figura_06_hogares_sobregasto_2022.png", title: "Households with expenditure above disposable income", meta: "Share of households whose expenditure exceeds disposable income." }
        ]
      },
      {
        id: "vivienda",
        label: "Housing",
        title: "Housing",
        description: "The housing section examines housing expenditure, tenure, and the burden associated with each tenure arrangement.",
        caption: "Source: Authors' calculations using the ninth EPF.",
        figures: [
          { number: "7", src: "assets/figures/epf/figura_07_peso_vivienda_2022.png", title: "Share of spending on housing", meta: "Share of the household budget spent on housing." },
          { number: "8", src: "assets/figures/epf/figura_08_tenencia_vivienda_2022.png", title: "Housing tenure by type of household head", meta: "Distribution of households by tenure of the primary dwelling." },
          { number: "9", src: "assets/figures/epf/figura_09_carga_vivienda_tenencia_2022.png", title: "Housing cost burden by tenure", meta: "Housing expenditure burden by type of household head and tenure." }
        ]
      },
      {
        id: "detalle-gasto",
        label: "Expenditure detail",
        title: "Expenditure detail",
        description: "The section closes with specific expenditure subcategories for migrant-headed households and an aggregate comparison of the eighth and ninth EPF rounds.",
        figures: [
          { number: "10", src: "assets/figures/epf/figura_10_top_subcategorias_migrantes_2022.png", title: "Main expenditure subcategories in migrant-headed households", meta: "Subcategories with the largest share of migrant-headed household budgets.", caption: "Source: Authors' calculations using the ninth EPF." },
          { number: "11", src: "assets/figures/epf/figura_11_composicion_total_hogares_2017_2022.png", title: "Overall household expenditure composition, 2017 and 2022", meta: "Aggregate comparison of the eighth and ninth EPF rounds.", caption: "Source: Authors' calculations using the eighth and ninth EPF rounds." }
        ]
      }
    ]
  }
};
