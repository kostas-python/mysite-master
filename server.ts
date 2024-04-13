import express, { Request, Response } from 'express';
import mongoose, { Document, Schema, Model } from 'mongoose';

const app = express();
const PORT = 27017;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Cluster0', { 
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
interface ContactMessage extends Document {
name: string;
email: string;
message: string;
}

const contactSchema = new Schema<ContactMessage>({
name: { type: String, required: true },
email: { type: String, required: true },
message: { type: String, required: true }
});

const ContactModel: Model<ContactMessage> = mongoose.model('ContactMessage', contactSchema);

// Enable JSON body parsing middleware
app.use(express.json());

// Define a POST endpoint to handle form data
app.post('/contact', async (req: Request, res: Response) => {
try {
  const { name, email, message } = req.body;
  const newContactMessage = new ContactModel({ name, email, message });
  const savedContactMessage = await newContactMessage.save();
  res.status(201).json({ message: 'Contact message saved successfully', data: savedContactMessage });
} catch (error) {
  console.error('Error saving contact message:', error);
  res.status(500).json({ error: 'Internal server error' });
}
});

// Start the server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
