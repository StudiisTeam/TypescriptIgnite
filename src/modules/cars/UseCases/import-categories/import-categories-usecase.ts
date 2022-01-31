import fs from 'fs'
import { parse } from 'csv-parse'
export class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path)
    const parser = parse();
    stream.pipe(parser)
    parser.on("data", async (line) => {
      console.log(line);
    })
  }
}
