import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// API to save JSON data files
app.post('/api/admin/save-data', (req, res) => {
  try {
    const { filename, data } = req.body;
    const allowed = ['company.json', 'services.json', 'projects.json', 'siteCopy.json', 'authConfig.json'];

    if (!allowed.includes(filename)) {
      return res.status(400).json({ error: 'Invalid filename' });
    }

    const dataDir = path.resolve(__dirname, '../dist/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    res.json({ success: true, filename });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve static dist folder
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SAINTRA VPS Production Express Server listening on port ${PORT}`);
});
