import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { Kerntaak } from '@/interfaces/kerntaak.interface';
import { KerntaakService } from '@services/kerntaak.service';

import { v4 as uuidv4 } from 'uuid';

export class KerntaakController {
    public kerntaak = Container.get(KerntaakService);

    public getKerntaak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllKerntaken: Kerntaak[] = await this.kerntaak.findAll();

            res.status(200).json({ data: findAllKerntaken, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    }

    public getKerntaakById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const kerntaakId: string = req.params.id;
            const findKerntaak: Kerntaak = await this.kerntaak.findById(kerntaakId);

            res.status(200).json({ data: [findKerntaak], message: 'findOne' });

        } catch (error) {
            next(error);
        }
    }

    public createKerntaak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const kerntaakId = uuidv4();
            req.body.id = kerntaakId;

            const kerntaakData: Kerntaak = req.body;
            const createKerntaakData: Kerntaak = await this.kerntaak.create(kerntaakData);

            res.status(201).json({ data: [createKerntaakData], message: 'create' });
        } catch (error) {
            next(error);
        }
    }

    public updateKerntaak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const kerntaakId: string = req.params.id;
            const kerntaakUpdates: Kerntaak = req.body;
            const updatedKerntaakData: Kerntaak = await this.kerntaak.update(kerntaakId, kerntaakUpdates);

            res.status(200).json({ data: [updatedKerntaakData], message: 'update' });
        } catch (error) {
            next(error);
        }
    }

    public deleteKerntaak = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const kerntaakId: string = req.params.id;
            const deleteKerntaakData: Kerntaak = await this.kerntaak.delete(kerntaakId);

            res.status(200).json({ data: [deleteKerntaakData], message: 'delete' });
        } catch (error) {
            next(error);
        }
    }
}