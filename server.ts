import express, { Request, Response } from 'express';
import mongoose, { Document, Schema, Model } from 'mongoose';

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/emaildetails?useNewUrlParser=true&useUnifiedTopology=true')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


          // Define a sample interface and model

interface Sample extends Document {
  name: string;
  email: string;
  message: string;
}

const sampleSchema = new Schema<Sample>({
  name: String,
  email: String,
  message: String
});


const SampleModel: Model<Sample> = mongoose.model('Sample', sampleSchema);


          // Enable JSON body parsing middleware

app.use(express.json());


          // Define a POST endpoint to handle form data

app.post('/api/samples', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body; 
    const newSample = new SampleModel({ name, email, message });
    await newSample.save();
    res.status(201).json({ message: 'Sample data saved successfully' });
  } catch (error) {
    console.error('Error saving sample data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define a sample API endpoint to retrieve all samples

app.get('/api/samples', async (req: Request, res: Response) => {
  try {
    const samples = await SampleModel.find();
    res.json(samples);
  } catch (error) {
    console.error('Error fetching samples:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
