import { createAction } from '@reduxjs/toolkit'
import {MainApi} from "../api";

export const rauto = createAction('rauto')

// client
export const getclients = 'client/all'
export const addclient = 'client/add'
export const getclient = 'client/' // :id
export const editclient = 'client/' // :id

// car
export const getcars = 'Car/all'
export const getcar = 'Car/' // :id
export const addcar = `${MainApi}/car/add`
export const editcar = 'Car/' // :id
