import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { Crebo } from '@interfaces/crebo.interface';
import { CreboService } from '@services/crebo.service';

import { v4 as uuidv4 } from 'uuid';

export class CreboController {
  public crebo = Container.get(CreboService);

  public getCrebo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCrebos: Crebo[] = await this.crebo.findAll();

      res.status(200).json({ data: findAllCrebos, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getCreboById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creboId: string = req.params.id;
      const findCrebo: Crebo = await this.crebo.findbyId(creboId);

      res.status(200).json({ data: [findCrebo], message: 'findOne' });

    } catch (error) {
      next(error);
    }
  }

  public createCrebo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creboId = uuidv4();
      req.body.id = creboId;

      const creboData: Crebo = req.body;
      const createCreboData: Crebo = await this.crebo.create(creboData);

      res.status(201).json({ data: [createCreboData], message: 'create' });
    } catch (error) {
      next(error);
    }
  }

  public updateCrebo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creboId: string = req.params.id;
      const creboUpdates: Crebo = req.body;
      const updatedCreboData: Crebo = await this.crebo.update(creboId, creboUpdates);

      res.status(200).json({ data: [updatedCreboData], message: 'update' });
    } catch (error) {
      next(error);
    }
  }

  public deleteCrebo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creboId: string = req.params.id;
      const deleteCreboData: Crebo = await this.crebo.delete(creboId);

      res.status(200).json({ data: [deleteCreboData], message: 'delete' });
    } catch (error) {
      next(error);
    }
  }
}