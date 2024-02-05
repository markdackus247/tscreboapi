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
        const findWerkproces: Werkproces = await WerkprocesModel.findOne({id: werkprocesId});
        if (!findWerkproces) throw new HttpException(409, "Werkprocess doesn't exist.");
        
        return findWerkproces;
    }

    public async update(werkprocesId: string, werkproces: Werkproces): Promise<Werkproces>{
        const findWerkproces: Werkproces = await WerkprocesModel.findOne({ id: werkprocesId }).lean();
        let updatedWerkproces: Werkproces;
        let updatedWerkprocesById: Werkproces;

        if (findWerkproces) {
            updatedWerkproces = {
                ...findWerkproces,
                ...werkproces
            }
            
            //TODO: Doesn't return the latest object.
            return WerkprocesModel.findOneAndUpdate(
                { id: werkprocesId },
                { ...updatedWerkproces }
            )
            .lean()
            .then(
                updatedWerkprocesById => {
                    return updatedWerkprocesById
                }
            )
            .catch(
                error => {
                    throw new HttpException(409, `The workproces ${updatedWerkproces.code} doesn't exist `);
                }
            )

        } else {
            throw new HttpException(409, `The workproces ${updatedWerkproces.code} doesn't exist `);
        }
    }

    public async create(werkprocesData: Werkproces): Promise<Werkproces> {
        const createWerkprocesData: Werkproces = await WerkprocesModel.create({...werkprocesData});
        
        return createWerkprocesData;
    }

    public async delete(werkprocesId: string): Promise<Werkproces> {
        const deleteWerkProces: Werkproces = await WerkprocesModel.findOneAndRemove({id: werkprocesId});
        if (!deleteWerkProces) throw new HttpException(409, "Werkproces doesn't exists");

        return deleteWerkProces;
    }

}