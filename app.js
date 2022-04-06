const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({ dest: 'images/' });

// Configuramos o upload como um middleware que
// espera um arquivo cujo a chave é "foto"
app.post('/upload', upload.single('file'), (req, res) => {
    const { nome, site } = req.body;
    res.json({ nome, site });
});

app.listen(3000);
