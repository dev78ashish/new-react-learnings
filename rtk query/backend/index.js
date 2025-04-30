const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const uploadFolder = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*'
  }));

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
        return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
};

const upload = multer({ storage, fileFilter });

app.get('/', (req, res) => {
    res.json({
        name: 'Devashish Prasad',
        age: 22
    })
})

app.post('/register', upload.single('image'), (req, res) => {
    const userData = req.body;      
    const uploadedFile = req.file; 
    res.json({
        message: 'User registered successfully!',
        user: userData,
        uploadedImage: uploadedFile
    });
});



app.post('/upload', (req, res, next) => {
    upload.array('images', 5)(req, res, function(err) {
        if (err) {
            if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                return res.status(400).json({ 
                    error: 'Too many files. Maximum allowed is 5.'
                });
            }
            return next(err);
        }
        
        const fileCount = req.files.length;
        
        res.json({
            message: `${fileCount} files uploaded successfully!`,
            files: req.files
        });
    });
});

app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});