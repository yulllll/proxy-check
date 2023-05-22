import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/', createProxyMiddleware({
	target: 'http://51.250.120.247:8080',
	changeOrigin: true
}));
app.listen(3000);
