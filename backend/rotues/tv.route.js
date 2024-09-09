import  express from 'express';
import {getSimilarTvs, getTrendingTv, getTvDetails, getTvsByCategory, getTvTrailer} from '../controller/tv.controller.js'
const router = express.Router();


router.get('/trending', getTrendingTv)
router.get('/:id/trailers', getTvTrailer)
router.get('/:id/details', getTvDetails)
router.get('/:id/similar', getSimilarTvs)
router.get('/:category', getTvsByCategory)

export default router