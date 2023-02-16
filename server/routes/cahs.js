import express from 'express';
import {get_assign, get_book, get_page, get_chat, get_choice, get_forum, get_label, get_resource, get_url} from '../controllers/cahs.js'
const router = express.Router()

router.get('/get_assign',get_assign )
router.get('/get_book',get_book )
router.get('/get_page',get_page )
router.get('/get_chat', get_chat)
router.get('/get_choice', get_choice)
router.get('/get_forum',get_forum )
router.get('/get_label',get_label )
router.get('/get_resource',get_resource )
router.get('/get_url',get_url )



export default router;
