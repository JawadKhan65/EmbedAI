import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import mime from 'mime-types';
import { mongo_connection } from '../../../../../lib/db';

// Initialize S3 client with the correct region
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

async function parseFormData(req) {
    const formData = await req.formData();
    const file = formData.get('file');
    const filename = formData.get('filename');
    return { file, filename };
}

export async function POST(req) {
    try {
        mongo_connection()
        // Parse the incoming form data
        const { file, filename } = await parseFormData(req);

        if (!file || !filename) {
            return NextResponse.json({ error: 'No file or filename provided' }, { status: 400 });
        }

        // Convert file to ArrayBuffer and then to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);

        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: filename,
            Body: fileBuffer,
            ContentType: mime.lookup(filename) || 'application/octet-stream',
        };

        // Upload to S3
        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        // Construct file URL
        const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;

        return NextResponse.json({ url: fileUrl }, { status: 200 });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
