import { MongoClient } from "mongodb";
async function ContactHandler(req, res) {
	if (req.method === "POST") {
		let client;
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "invalid inputs ..." });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};
		try {
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusername}.vebfjx8.mongodb.net/${process.env.mongodb_databasename}?retryWrites=true&w=majority`
			);
		} catch (error) {
			res.status(500).json({ message: error.message });
			return;
		}
		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne({ newMessage });
			newMessage._id = result.insertedId;
			client.close();
		} catch (error) {
			res.status(500).json({ message: error.message });
			return;
		}
		res.status(201).json({ message: "message sent successfully", newMessage });
		client.close();
	}
}

export default ContactHandler;
