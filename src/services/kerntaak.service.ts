import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Kerntaak } from '@interfaces/kerntaak.interface';
import { KerntaakModel } from '@models/kerntaak.models';
import { Crebo } from '@interfaces/crebo.interface';
import { CreboModel } from '@models/crebo.models';


@Service()
export class KerntaakService {
  public async findAll(creboId: string): Promise<Kerntaak[]> {
    const crebo: Crebo[] = await CreboModel.find(
      { id: creboId }
    ).lean();

    return crebo[0].kerntaken;
  }

  public async findById(kerntaakId: string): Promise<Kerntaak> {
    const findKerntaak: Kerntaak = await KerntaakModel.findOne({ id: kerntaakId }).lean();
    if (!findKerntaak) throw new HttpException(409, "Kerntaak met gegeven id bestaat niet");

    return findKerntaak;
  }

  public async create(kerntaakData: Kerntaak): Promise<Kerntaak> {
    const createKerntaakData: Kerntaak = await KerntaakModel.create(
      { ...kerntaakData }
    )

    return createKerntaakData;
  }

  public async update(kerntaakId: string, kerntaak: Kerntaak): Promise<Kerntaak> {
    const findKerntaak: Kerntaak = await KerntaakModel.findOne({ id: kerntaakId }).lean()
    let updatedKerntaak: Kerntaak;

    if (findKerntaak) {
      updatedKerntaak = {
        ...findKerntaak,
        ...kerntaak
      }
    } else {
      throw new HttpException(400, `This kerntaak ${kerntaak.code} doesn't exits.`);
    }

    const previouseKerntaak = await KerntaakModel.findOneAndUpdate(
      { id: kerntaakId },
      { ...updatedKerntaak }
    )

    if (previouseKerntaak) {
      return updatedKerntaak
    } else {
      throw new HttpException(400, `Error while updating ${kerntaak.code}.`);
    }
  }

  public async delete(kerntaakId: string): Promise<Kerntaak> {
    const deletedKerntaak: Kerntaak = await KerntaakModel.findOneAndDelete(
      { id: kerntaakId }
    ).lean()

    return deletedKerntaak;
  }

}