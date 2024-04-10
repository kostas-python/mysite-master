import express, { Request, Response } from 'express';
import mongoose, { Document, Schema, Model } from 'mongoose';


const app = express();
const PORT = 27017;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a sample interface and model
interface Sample extends Document {
  name: string;
  age: number;
}

const sampleSchema = new Schema<Sample>({
  name: String,
  age: Number
});

const SampleModel: Model<Sample> = mongoose.model('Sample', sampleSchema);

// Define a sample API endpoint
app.get('/api/samples', async (req: Request, res: Response) => {
  try {
    const samples = await SampleModel.find();
    res.json(samples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});