import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const projectId = searchParams.get('project_id');

        if (!projectId) {
            return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400 });
        }

        const filePath = path.join('projectJSONs', `${projectId}.json`);

        if (!fs.existsSync(filePath)) {
            return new Response(JSON.stringify({ error: 'File not found' }), { status: 404 });
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error reading file:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}