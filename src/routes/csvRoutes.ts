import express from 'express';
import { upload } from '../services/csvService';
import { convertCsvToJson } from '../controllers/csvControllers';

const router = express.Router();

router.post('/upload', upload.single('csv_file'), convertCsvToJson);

export default router;
