import { Request, Response } from 'express';
import { csvToJson } from '../services/csvService';

export const convertCsvToJson = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No CSV file provided' });
      return;
    }

    const json_data = await csvToJson(req.file.buffer.toString());

    res.json({ result: json_data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
