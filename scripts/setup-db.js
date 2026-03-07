const { Client } = require('pg');

async function main() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error("Missing DATABASE_URL");
        return;
    }
    const client = new Client({ connectionString });

    try {
        await client.connect();
        console.log("Connected to db, creating tables...");

        await client.query(`
      CREATE TABLE IF NOT EXISTS chats (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        tag TEXT NOT NULL,
        unread INTEGER DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,
        sender_id TEXT NOT NULL, 
        text TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

        // Enable realtime for messages
        console.log("Enabling realtime for messages...");
        await client.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_publication_tables 
          WHERE pubname = 'supabase_realtime' AND tablename = 'messages'
        ) THEN
          ALTER PUBLICATION supabase_realtime ADD TABLE messages;
        END IF;
      END $$;
    `);

        // Seed dummy chats
        const res = await client.query(`SELECT COUNT(*) FROM chats`);
        if (res.rows[0].count === '0') {
            console.log("Seeding chats...");
            await client.query(`
        INSERT INTO chats (name, role, tag) VALUES 
        ('Sohith (Realtime)', 'Co-founder', 'co-founder'),
        ('TWONNECT Assistant', 'AI Collaborator', 'ai'),
        ('Investor Group #4', 'Seed Stage LP', 'investor');
      `);

            const chats = await client.query(`SELECT id FROM chats`);
            for (const row of chats.rows) {
                await client.query(`
              INSERT INTO messages (chat_id, sender_id, text) VALUES
              ($1, 'them', 'Hello! This is a test message from Supabase.'),
              ($1, 'them', 'We can now communicate in real-time.')
          `, [row.id]);
            }
        }

        console.log("DB Setup complete!");
    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }
}

main();
