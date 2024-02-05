import { Router } from 'express';
import { WerkprocesController } from '@controllers/werkproces.controller';
import { CreateWerkprocesDto, UpdateWerkprocesDto } from '@dtos/werkproces.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class WerkprocesRoute implements Routes {
  public path = '/werkproces';
  public router = Router();
  public werkproces = new WerkprocesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.werkproces.getWerkprocessen);
    this.router.get(`${this.path}/:id`, this.werkproces.getWerkprocesById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateWerkprocesDto), this.werkproces.createWerkproces);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateWerkprocesDto), this.werkproces.updateWerkproces);
    this.router.delete(`${this.path}/:id`, this.werkproces.deleteWerkproces);
  }
}