const localhostUrl = "http://localhost:3000"
const renderUrl = "https://sellnow-backend.onrender.com"

const serverUrl = (process.env.ENV === 'production') ? renderUrl: localhostUrl;

export {serverUrl}
