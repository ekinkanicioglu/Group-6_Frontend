const localhostUrl = "http://localhost:8080"
const renderUrl = "https://sellnow-backend.onrender.com"

const serverUrl = (process.env.ENV === 'production') ? renderUrl: localhostUrl;

export {serverUrl}
