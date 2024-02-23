import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import multer from 'multer';
import morgan from 'morgan';
import Path  from 'path';
import {fileURLToPath} from 'url';

/*configuration*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename)
dotenv.config()