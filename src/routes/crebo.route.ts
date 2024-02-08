import { Router } from 'express';
import { CreboController } from '@controllers/crebo.controllers';
import { CreateCreboDto, UpdateCreboDto } from '@dtos/crebo.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class CreboRoute implements Routes {
  public path = '/crebo';
  public router = Router();
  public crebo = new CreboController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.crebo.getCrebo);
    this.router.get(`${this.path}/:id`, this.crebo.getCreboById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateCreboDto), this.crebo.createCrebo);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateCreboDto), this.crebo.updateCrebo);
    this.router.delete(`${this.path}/:id`, this.crebo.deleteCrebo);
  }
}
