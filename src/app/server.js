const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

const client = new Client({
  user: 'techbets',
  host: 'localhost',
  database: 'Student_Registration_Portal',
  password: 'techbets',
  port: 5432, // default port for PostgreSQL
});

// Parse JSON Bodies (to handle form data)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Connected to database');
  }
});

client.on('end', () => {
  console.log('Disconnected from database');
});

app.post('/exam', async (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
  
    try {
      const query = `
        INSERT INTO exam (startDate, endDate, eligibilityCriteriaFile, otherDetails, examName)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
      `;
  
      const values = [
        formData.startDate,
        formData.endDate,
        formData.eligibilityCriteriaFile,
        formData.otherDetails,
        formData.examName
      ];
  
      const result = await client.query(query, values);
      const insertedRowId = result.rows[0].id;
      console.log('Form data inserted successfully with ID:', insertedRowId);
  
      res.json({ message: 'Form data saved to the database!', formData });
    } catch (error) {
      console.error('Error inserting form data:', error);
      res.status(500).json({ message: 'Error inserting form data', error });
    }
  });
  
  
  


app.get('/exam', async (req, res) => {
    try {
      const query = 'SELECT * FROM exam';
      const result = await client.query(query);
      const exams = result.rows;
      res.json({ "Existing Exams": exams });
    } catch (error) {
      console.error('Error retrieving exams:', error);
      res.status(500).json({ message: 'Error retrieving exams', error });
    }
  });
  

const PORT = process.env.PORT || 400;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
