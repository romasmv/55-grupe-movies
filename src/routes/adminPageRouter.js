import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboards.js';

export const adminPageRouter = express.Router();

adminPageRouter.get('/admin', (req, res) => res.send(new PageDashboard(req).render()));