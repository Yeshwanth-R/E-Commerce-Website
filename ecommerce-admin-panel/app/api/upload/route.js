import { NextResponse } from 'next/server';
import { PutObjectAclCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';



const buckName = "yeshwanth-ecommerce"


export async function POST(req) {
    let data = await req.formData(); // Get the form data
    let arr = data.getAll('images');
    // console.log(arr);                // Array of files
    const fileData = arr.map(file => {
        const { size, type, name, lastModified } = file;
        return { size, type, name, lastModified };
    });
    // console.log(fileData);         // Array of file data

    // Upload the files to S3

    const client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET,
        },
    });

    for (const file of arr) {
        const ext = file.name.split('.').pop();
        const key = `${Date.now()}.${ext}`;
        // console.log(key, ext, file);

        // await client.send(new PutObjectAclCommand({
        //     Bucket: buckName,
        //     Key: key,
        //     body: fs.readFileSync()
        // }))
    }
    return NextResponse.json({ message: 'Uploaded successfully', data });

}

