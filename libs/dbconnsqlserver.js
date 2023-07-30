const sql = require('mssql')

// Configuración de la conexión a la base de datos
const config = {
  user: 'Sebastian',
  password: 'poolbola8',
  server: '192.168.1.20', // Puede ser una dirección IP o un nombre de servidor
  database: 'BDSQLSERVER',
  options: {
    encrypt: false, // Establecer a true si estás utilizando una conexión segura (por ejemplo, con Azure)
  },
}

// Función para realizar una consulta a la base de datos
const execute = async query => {
  try {
    // Establecer una conexión a la base de datos
    await sql.connect(config)

    // Ejecutar la consulta
    const result = await sql.query(query)

    // Cerrar la conexión a la base de datos
    await sql.close()

    // Retornar los resultados
    return result.recordset
  } catch (err) {
    // Manejar errores
    console.error('Error:', err.message)
    return err.message
  }
}

// Llamar a la función para ejecutar la consulta
module.exports = { execute }
