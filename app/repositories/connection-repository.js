exports.connectionReturn = async (db) =>{
  
  db.on('connected', () => {
    console.log('Mongoose default connection is open');
  });

  db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
  });

  db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    db.close(() => {
      console.log(
        'Mongoose default connection is disconnected due to application termination'
      );
      process.exit(0);
    });
  });
}