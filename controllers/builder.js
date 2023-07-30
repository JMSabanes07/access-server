const sql = require('../libs/dbconnsqlserver')

const builder = async req =>
  new Promise(async (resolve, reject) => {
    const queryProducts = `
        SELECT 
          Ar_Id AS id, 
          Ar_codbarra AS barCode, 
          Ar_descri AS name, 
          ar_data_PrecioCosto AS price,
          Ar_Data_lista1 AS pricePercentage,
          TI_Iva AS iva,
          UP_COD AS type,
          Ar_Imagen AS img,
          Ar_Config_IdSubRubro AS collectionId
        FROM 
          Articulos_config, Articulos, Articulos_Data, TipIva, UNIDADES_PROD
        WHERE 
          (Ar_Id = Ar_Id_Config AND Ar_Id = Ar_Id_Data)
        AND 
          Ar_Estado = 1
        AND 
          TI_TipIva = Ar_Config_TipoIva
        AND
          Ar_Config_UNIDVTA = UNIDADES_PROD.id;`

    const queryCollections = `
        SELECT 
          IdSubRubro AS id,
          NombreSubRubro AS name
        FROM 
          SubRubros
        WHERE
          EstadoSubRubro = 'ACTIVO';`

    try {
      const dataProducts = await sql.execute(queryProducts)
      const dataCollections = await sql.execute(queryCollections)
      resolve({
        collections: dataCollections,
        products: dataProducts,
      })
    } catch (error) {
      reject({ error })
    }
  })

module.exports = { builder }
