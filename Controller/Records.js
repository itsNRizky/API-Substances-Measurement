const db = require('../db')
const response = require('../res')

exports.getRecordsByExperimentsID = (req, res) => {
  const experiments_id = req.params.experiments_id
  db.query(`SELECT * FROM records WHERE records.records_experiments = ${experiments_id}`, (err, data) => {
    if (err){
      console.error(`||Error getting records by Experiments: ${experiments_id}|| \n${err.stack}`)
    }

    response.ok(data, res)
  })
}

exports.insertRecord = (req, res) => {
  //Rayhan mintanya pake method GET
  const scales_device = req.params.device
  const value = req.params.value //Dari IoT
  const timestamp = req.params.timestamp //Dari IoT

  //Ambil scale_id dari scale_device yang dipunya
  db.query(`SELECT * FROM scales WHERE scales_device = '${scales_device}'`, (err, data) => {
    if (err){
      console.error(`||Error getting the scales_id from scale_device: ${scales_device}||\n${err.stack}`)
    }
    const scales_id = data[0].scales_id //Ini masih belum tau, cara ambil datanya gimana
    console.log(`Ini scales ID: ${scales_id}`)
    //Ambil ambil experiments_id dari table experiments lewat experiments_scales (scales_id)
    //Intinya, disini timbangan mau masukin data ke eksperiement yang pake timbangan ini dan juga eksperimen yang statusnya sedang melakukan penimbangan
    //Atau intinya timbangan kirim data ke eksperimen yang lagi proses rekam pake timbangan ini.
    db.query(`SELECT * FROM experiments WHERE experiments_scales = '${scales_id}' AND experiments_state = 'doing'`, (err, data) => {
      if (err){ 
        console.error(`||Error getting experiments by experiments scale ID: ${scales_id}||`)
      }
      if (data.length == 0){
        response.failed(`Error due to lacking 'doing' data in experiment with scales ID: ${scales_device}`, res)
        return console.log('No experiments with "doing" state')
      }
      
      //Data eksperimen sudah merupakan data yang sedang bereksperimen dengan timbangan 'ini'
      const expectedExperimentsID = data[0].experiments_id //cek dulu juga, isi data tu kaya apa, apakah gini benar buat ambil id nya?
      console.log(expectedExperimentsID)
      db.query(`INSERT INTO records (records_id, records_value, records_timestamp, records_experiments) VALUE ('', '${value}', '${timestamp}', '${expectedExperimentsID}')`, (err, data) => {
        if (err){
          console.error(`||Error inserting record by experiment|| \n${err.stack}`)
        }
    
        response.ok(`Recording data from scales: ${scales_device} to experiments ID: ${expectedExperimentsID}`, res)
      })
    })

  })
}