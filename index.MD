---
layout: default
---

<style>
body {
  display: flex;
  margin: 0;
}
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  padding: 20px;
}
.sidebar {
  position: fixed;
  top: 160px; /* Adjust this value to ensure it appears below the GitHub link */
  width: 200px;
  height: calc(100% - 160px); /* Adjust based on the top offset */
  background-color: #f7f7f7;
  padding: 10px;
  overflow: auto;
}
.content {
  margin-left: 220px; /* Adjust based on sidebar width */
  padding: 20px;
  flex: 1;
}
</style>

<div class="main-content">
  <div class="header">
    <h1>Estadísticas Migra</h1>
    <p>Núcleo de investigación de temáticas de migración en Chile.</p>
    <p><a href="https://github.com/NucleoMIGRA/migra">View the Project on GitHub</a></p>
  </div>

  <div class="sidebar">
    <h2>Menu</h2>
    <ul>
      <li><a href="{{ '/' | relative_url }}">Home</a></li>
      <li><a href="{{ '/MINEDUC.md' | relative_url }}">MINEDUC</a></li>
      <li><a href="{{ '/SNM.md' | relative_url }}">Servicio Nacional de Migraciones</a></li>
      <li><a href="{{ '/CENSO.md' | relative_url }}">CENSO 2017</a></li>
      <li><a href="{{ '/CASEN.md' | relative_url }}">CASEN</a></li>
      <li><a href="{{ '/ENE.md' | relative_url }}">ENE</a></li>
      <li><a href="{{ '/EPF.md' | relative_url }}">EPF</a></li>
    </ul>
  </div>

  <div class="content">
    # Estadísticas MIGRA
    El siguiente repositorio tiene como objetivo recopilar información de bases de datos de naturaleza abierta, con tal de evidenciar la situación de migrantes en Chile. Las estadísticas se encuentran divididas por temática.

    1. [MINEDUC](./MINEDUC.md)
    2. [Servicio Nacional de Migraciones](./SNM.md)
    3. [CENSO 2017](./CENSO.md)
    4. [CASEN](./CASEN.md)
    5. [ENE](./ENE.md)
    6. [EPF](./EPF.md)

    ## Figuras destacadas:

    Figura 1: Se puede observar que el origen de los estudiantes extranjeros para el año 2023, corresponde en su mayoría a estudiantes de Venezuela, Bolivia, Colombia y Perú.

    ![image](https://github.com/NucleoMIGRA/Plataforma_privado/assets/154906172/cf36f7fe-26b1-455f-ac22-827c3b0fce3c)

    Figura 2: En esta figura se presenta la tasa de aprobación por tipo de residencia, en este gráfico se eliminan casos con más de una solicitud.

    ![image](https://github.com/NucleoMIGRA/Plataforma_privado/assets/154906172/7820af29-6abf-4b7b-850c-bc9d3555466b)

    Figura 3: Es posible observar que extranjeros concentran su población entre los 20 y 45 años.

    ![piramide_extranjero](https://github.com/NucleoMIGRA/Plataforma_privado/assets/154906172/354b0209-66c7-450c-bba1-64082e77eb44)

    Figura 4: Del total de personas en estado de hacinamiento, el gráfico presenta que el porcentaje de hacinamiento crítico es mayor en migrantes.

    ![fig_3](https://github.com/NucleoMIGRA/Plataforma_privado/assets/154906172/7c8cda9f-7c13-4a1f-a0c2-f7ac439b0f90)

    Figura 5: Se observa que migrantes declaran ganar más por hora que chilenos hasta el año 2017.

    ![image](https://github.com/NucleoMIGRA/Plataforma_privado/assets/154906172/935112ed-6967-42b4-955f-d32bb582bf2b)
  </div>
</div>
