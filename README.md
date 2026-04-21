**Welcome to the AI Photo Studio App**

**About**

This is a professional photo processing application that uses a custom API backend for image processing, analysis, and enhancement. The app provides AI-powered features to transform photos into professional ID and passport photos.

**Features**

- Upload and process photos
- AI-powered photo analysis with professional scoring
- Automatic background removal and enhancement
- Support for multiple photo formats (ID, passport, resume, profile)
- Multiple background options (white, light gray, soft blue)
- Professional outfit enhancement option
- Before/after photo comparison view

**Edit the code in your local development environment**

This project is ready for local development and customization.

**Prerequisites:**

1. Clone the repository using the project's Git URL
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Create an `.env.local` file and set the required environment variables

**Environment Variables**

Create an `.env.local` file in the project root with the following variables:

```
VITE_API_BASE_URL=http://localhost:3000
VITE_IMAGE_MODEL=black-forest-labs/FLUX.1-dev
```

Example configuration:
```
VITE_API_BASE_URL=http://localhost:3000
VITE_IMAGE_MODEL=black-forest-labs/FLUX.1-dev
```

For production:
```
VITE_API_BASE_URL=https://your-api-server.com
VITE_IMAGE_MODEL=black-forest-labs/FLUX.1-dev
```

**Custom API Backend Requirements**

Your backend API should implement the following endpoints:

- `POST /api/upload` - Upload image file
- `POST /api/analyze-image` - Analyze image with LLM
- `POST /api/generate-image` - Generate enhanced image
- `POST /api/edit-image` - Edit image with mask and prompt
- `POST /api/photo-sessions` - Save photo session
- `GET /api/auth/me` - Check authentication status
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

**Run the app locally**

```bash
npm run dev
```

The app will start on `http://localhost:5173` by default.

**Build for production**

```bash
npm run build
```

**API Client Usage**

The app provides a custom API client in `src/api/apiClient.js` with the following functions:

```javascript
import { 
  uploadFile,
  analyzeImage,
  generateImage,
  editImage,
  savePhotoSession,
  checkAuth,
  login,
  logout
} from '@/api/apiClient';
```

For more details, see the API client source code.

**Architecture Changes**

This project has been refactored to remove all Base44 dependencies and use a custom API backend. All server-side operations (file uploads, image processing, LLM analysis) are now handled by your custom backend API instead of the Base44 service.

**Migration Notes**

If you're upgrading from a Base44-based version:

- Remove `VITE_BASE44_*` environment variables
- Add `VITE_API_BASE_URL` pointing to your custom API
- Ensure your backend implements the required API endpoints
- Update authentication to use your custom auth backend
- All image processing now goes through your custom API

**Support & Documentation**

For questions or issues with the custom API implementation, refer to your backend API documentation.
