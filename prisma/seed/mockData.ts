import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f5f5feb9-ce83-4f47-b225-ad4a1a7cabbb', '1Angelica68@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('6c603bc4-230c-487c-baf3-a50faaa44cfb', '10Violette15@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('686294e5-a764-4906-a7ea-bb9c0e8c0916', '19Javier.Hudson-Collier0@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv11223', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('42e53bc7-274a-4ae1-9546-c3201ef120a7', '28Hollis.Haley@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv78901', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('6bad25f0-0188-4f3d-8aaf-28af010119b4', '37Dimitri4@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv67890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('de812240-2693-4657-b26a-1caee3c21693', '46Julien.Cummings@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv78901', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('50f93ae1-71ae-42dc-a8f2-9968661d746c', '55Genevieve_Aufderhar@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv67890', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('60d804b9-8a78-4123-84c1-9a83f5cd5041', '73Seth_Erdman1@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv44556', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c00671d6-c1ea-45bf-bc87-590e9aa53978', '82Annalise.Towne88@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv67890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('901c1cb9-c039-4298-b213-fdec09167621', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'anotherPassphrase', '6c603bc4-230c-487c-baf3-a50faaa44cfb');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('7cce2685-d301-4238-b23e-cf1b09b63955', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'yetAnotherOne', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('e154e70d-e5df-4ce6-aee3-04c74530596a', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'hiddenPhrase', '60d804b9-8a78-4123-84c1-9a83f5cd5041');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('5933b7f2-fbb6-49d3-a0e6-01f2867a828f', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'superSecure', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('0b60306b-ff4b-429e-816e-6954bc4edb16', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'hiddenPhrase', '6bad25f0-0188-4f3d-8aaf-28af010119b4');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('3f946344-5f38-4941-853f-8da833712caa', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'anotherPassphrase', '42e53bc7-274a-4ae1-9546-c3201ef120a7');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('18b09795-52d8-4939-a90c-35854dfa9c8c', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'mySecretPass', 'de812240-2693-4657-b26a-1caee3c21693');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('d58c1d5f-6a4e-4d15-85df-d5e23e60edd5', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'superSecure', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('15fc5b41-0a7f-48ff-b939-2dfe0790a6f5', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'anotherPassphrase', '686294e5-a764-4906-a7ea-bb9c0e8c0916');
INSERT INTO "Credential" ("id", "password", "passphrase", "userId") VALUES ('eae55d59-b11e-4409-8ea2-d28f90286e1d', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'yetAnotherOne', '6bad25f0-0188-4f3d-8aaf-28af010119b4');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
