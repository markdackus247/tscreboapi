import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Werkproces } from '@/interfaces/werkproces.interface';
import { WerkprocesService } from '@/services/werkproces.service';

import { v4 as uuidv4 } from 'uuid';

export class WerkprocesController {
  public werkproces = Container.get(WerkprocesService);

  public getWerkprocessen = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllWerkprocessenData: Werkproces[] = await this.werkproces.findAll();

      res.status(200).json({ data: findAllWerkprocessenData, message: 'findAll' });
    }
    catch (error) {
      next(error);
    }
  }

  public getWerkprocesById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const werkprocesId: string = req.params.id;
      const findOneWerkprocesData: Werkproces = await this.werkproces.findById(werkprocesId);

      res.status(200).json({ data: findOneWerkprocesData, message: 'findOne' });
    }
    catch (error) {
      next(error);
    }
  }

  public createWerkproces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const werkprocesId = uuidv4();
      req.body.id = werkprocesId;

      const werkprocesData: Werkproces = req.body;
      const createWerkprocesData: Werkproces = await this.werkproces.create(werkprocesData);

      res.status(201).json({ data: createWerkprocesData, message: 'created' });
    }
    catch (error) {
      next(error);
    }
  }

  public updateWerkproces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const werkprocesId: string = req.params.id;
      const werkprocesUpdates: Werkproces = req.body;
      const updateWerkprocesData: Werkproces = await this.werkproces.update(werkprocesId, werkprocesUpdates);

      res.status(200).json({ data: updateWerkprocesData, message: 'updated' })
    }
    catch (error) {
      next(error);
    }
  }

  public deleteWerkproces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const werkprocesId: string = req.params.id;
      const deleteWerkprocesData: Werkproces = await this.werkproces.delete(werkprocesId);

      res.status(200).json({ data: deleteWerkprocesData, message: 'deleted' });
    }
    catch (error) {
      next(error);
    }
  }
}