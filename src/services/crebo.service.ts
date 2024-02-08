import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Crebo } from '@interfaces/crebo.interface';
import { CreboModel } from '@models/crebo.models';

@Service()
export class CreboService {
  public async findAll(): Promise<Crebo[]> {
    const crebos: Crebo[] = await CreboModel.find().lean();

    return crebos;
  }

  public async findbyId(creboId: string): Promise<Crebo> {
    const creboData: Crebo = await CreboModel.find({ id: creboId }).lean();

    if (creboData) {
      return creboData;
    } else {
      throw new HttpException(409, "Opleiding gegeven id bestaat niet.");
    }
  }

  public async create(creboData: Crebo): Promise<Crebo> {
    const createCreboData: Crebo = await CreboModel.create(
      { ...creboData }
    )

    return createCreboData;
  }

  public async update(creboId: string, crebo: Crebo): Promise<Crebo> {
    const findCrebo: Crebo = await CreboModel.findOne({ id: creboId }).lean();
    let updatedCrebo: Crebo;

    if (findCrebo) {
      updatedCrebo = {
        ...findCrebo,
        ...crebo
      }
    } else {
      throw new HttpException(400, `This kerntaak ${crebo.creboNumber} doesn't exits.`);
    }

    const previouseCrebo = await CreboModel.findOneAndUpdate(
      { id: creboId },
      { ...updatedCrebo }
    )

    if (previouseCrebo) {
      return updatedCrebo
    } else {
      throw new HttpException(400, `Error while updating ${updatedCrebo.creboNumber}.`);
    }
  }

  public async delete(creboId: string): Promise<Crebo> {
    const deletedCrebo: Crebo = await CreboModel.findOneAndDelete(
      { id: creboId }
    ).lean()

    return deletedCrebo;
  }
}


