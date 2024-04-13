// Insert a document into the 'contacts' collection
db.contacts.insertOne({
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, this is a test message"
  });
  
  // Find all documents in the 'contacts' collection
  db.contacts.find().toArray();
  