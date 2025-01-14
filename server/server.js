const express=require('express');
const path=require('path')
const app=express();
const port=process.env.port||3001;

app.use(express.static(path.join(__dirname,"static_files")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`)
})
