const sql = require('mssql')

// Configuración de la conexión a la base de datos
const config = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'nombre_servidor', // Puede ser una dirección IP o un nombre de servidor
  database: 'nombre_base_de_datos',
  options: {
    encrypt: true, // Establecer a true si estás utilizando una conexión segura (por ejemplo, con Azure)
  },
}

// Función para realizar una consulta a la base de datos
async function execute(query) {
  try {
    // Establecer una conexión a la base de datos
    await sql.connect(config)

    // Ejecutar la consulta
    const result = await sql.query(query)

    // Imprimir los resultados
    console.log(result.recordset)

    // Cerrar la conexión a la base de datos
    await sql.close()
  } catch (err) {
    // Manejar errores
    console.error('Error:', err.message)
  }
}

// Llamar a la función para ejecutar la consulta
module.exports = execute
