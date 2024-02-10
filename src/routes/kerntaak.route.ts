import { Router } from 'express';
import { KerntaakController } from '@controllers/kerntaak.controllers';
import { CreateKerntaakDto, UpdateKerntaakDto } from '@dtos/kerntaak.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class KerntaakRoute implements Routes {
    public path = '/crebo/:cid/kerntaak';
    public router = Router();
    public kerntaak = new KerntaakController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.kerntaak.getKerntaak);
        this.router.get(`${this.path}/:id`, this.kerntaak.getKerntaakById);
        this.router.post(`${this.path}`, ValidationMiddleware(CreateKerntaakDto), this.kerntaak.createKerntaak);
        this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateKerntaakDto), this.kerntaak.updateKerntaak);
        this.router.delete(`${this.path}/:id`, this.kerntaak.deleteKerntaak);
    }
}