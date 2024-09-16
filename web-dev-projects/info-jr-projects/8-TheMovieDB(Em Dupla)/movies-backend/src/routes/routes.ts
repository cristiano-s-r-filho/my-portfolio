import { Router } from "express";
import { cadastro_user,get_user,get_Favorites,new_Favorites,delete_Favorites } from "../controllers/controller";
import cors from 'cors'
// Definir roteador: 
const router = Router()
router.use(cors())
//Rotas Get 
router.get('/user_area', get_user)
router.get('/favorites/:id', get_Favorites)
//Rotas Post
router.post('/sigin', cadastro_user)
router.post('/add_favorite', new_Favorites)
//Rota Delete
router.delete('/delete_favorite',delete_Favorites)

export default router

