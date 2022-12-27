
const email = 'projectname-12345@appspot.gserviceaccount.com';
const key = '-----BEGIN PRIVATE KEY-----\nPrivateKeyLine1\nPrivateKeyLine2\nPrivateKeyLineN\n-----END PRIVATE KEY-----';
const projectId = 'projectname-12345'
const firestore = FirestoreApp.getFirestore(email, key, projectId);

/**
* MAIS INFORMAÇOES:
* 🔛 ORM: https://github.com/grahamearley/FirestoreGoogleAppsScript 
* 📄 DOCS: https://developers.google.com/apps-script/guides/properties
*/
