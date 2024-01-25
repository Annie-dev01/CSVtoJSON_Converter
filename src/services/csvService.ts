import csvtojson from 'csvtojson';
import multer from 'multer';

export const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });


export const csvToJson = async (csvData: string): Promise<object[]> => {
  try {
    const jsonArray = await csvtojson({
      headers: ['name', 'age', 'email'], 
    }).fromString(csvData);
    return jsonArray as object[];
  } catch (error: any) {
    throw new Error(`CSV to JSON conversion error: ${error.message}`);
  }
};
