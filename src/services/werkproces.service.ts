import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Werkproces } from '@interfaces/werkproces.interface';
import { WerkprocesModel } from '@models/werkproces.models';

@Service()
export class WerkprocesService {
  public async findAll(): Promise<Werkproces[]> {
    const werkprocesen: Werkproces[] = await WerkprocesModel.find();

    return werkprocesen;
  }

  public async findById(werkprocesId: string): Promise<Werkproces> {
    const findWerkproces: Werkproces = await WerkprocesModel.findOne({ id: werkprocesId });
    if (!findWerkproces) throw new HttpException(409, "Werkprocess doesn't exist.");

    return findWerkproces;
  }

  public async create(werkprocesData: Werkproces): Promise<Werkproces> {
    const createWerkprocesData: Werkproces = await WerkprocesModel.create({ ...werkprocesData });

    return createWerkprocesData;
  }

  public async update(werkprocesId: string, werkproces: Werkproces): Promise<Werkproces> {
    const findWerkproces: Werkproces = await WerkprocesModel.findOne({ id: werkprocesId }).lean();
    let updatedWerkproces: Werkproces;

    if (findWerkproces) {
      updatedWerkproces = {
        ...findWerkproces,
        ...werkproces
      }

      return WerkprocesModel.findOneAndUpdate(
        { id: werkprocesId },
        { ...updatedWerkproces },
        { new: true }
      )
        .lean()
        .then(
          updatedWerkprocesById => {
            console.log(`updatedWerkprocesById`, updatedWerkprocesById);
            return updatedWerkprocesById
          }
        )
        .catch(
          error => {
            throw new HttpException(409, `The workproces ${updatedWerkproces.code} doesn't exist `);
          }
        );

    } else {
      throw new HttpException(409, `The workproces ${updatedWerkproces.code} doesn't exist `);
    }
  }

  public async delete(werkprocesId: string): Promise<Werkproces> {
    const deleteWerkProces: Werkproces = await WerkprocesModel.findOneAndRemove({ id: werkprocesId });
    if (!deleteWerkProces) throw new HttpException(409, "Werkproces doesn't exists");

    return deleteWerkProces;
  }

}