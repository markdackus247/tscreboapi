import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { Kerntaak } from '@/interfaces/kerntaak.interface';
import { KerntaakModel } from '@/models/kerntaak.models';

@Service()
export class KerntaakService {
    public async findAll(): Promise<Kerntaak[]> {
        const kerntaken: Kerntaak[] = await KerntaakModel.find();
        
        return kerntaken;
    }

    public async findById(kerntaakId: string): Promise<Kerntaak> {
        const findKerntaak: Kerntaak = await KerntaakModel.findOne({ id: kerntaakId });
        if (!findKerntaak) throw new HttpException(409, "Kerntaak met gegeven id bestaat niet");

        return findKerntaak;
    }
}