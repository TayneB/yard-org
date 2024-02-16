import { Router } from 'express'

import * as db from '../db/events.ts'

const router = Router()

// /api/v1/events/
router.get('/', async (req, res) => {
  try {
    const events = await db.getAllEvents()
    res.json({ events })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/v1/events/delete/:id
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteEvent(id)
    res.json({ message: `deleted ${id}` })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
